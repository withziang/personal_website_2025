// src/components/CodeShowcase.tsx
'use client';

import { motion } from 'framer-motion';

const codeSnippet = `
#include "Application.h"
#include "Navigation.h"
#include "../models/QuestionModel.h"
#include "../services/ExamService.h"

#include <QTranslator>
#include <QDebug>
#include <QQmlContext> // For qmlRegisterSingletonInstance if not using specific function for it

Application::Application(int &argc, char **argv)
    : QGuiApplication(argc, argv)
{
    setOrganizationName("MyCompany");
    setApplicationName("ACEA");
    setApplicationVersion("1.0");

    // Order is important: create services first, then navigation
    m_questionModel = new QuestionModel(this);
    m_examService = new ExamService(m_questionModel, this); // ExamService needs QuestionModel
    m_navigation = new Navigation(m_examService, this);   // Navigation needs ExamService for reset

    setupTranslations(); // Optional
    registerQmlTypes();
    setupQmlEngine();

    // Handle app close during coding
    connect(this, &QGuiApplication::aboutToQuit, this, [this]() {
        if (m_navigation && m_examService) {
            // Assuming IdePage.qml is the identifier for the coding page
            // This is based on the Navigation m_currentPage property.
            QString currentPageName = m_navigation->currentPageName();
            if (currentPageName == "IdePage.qml") {
                qDebug() << "App closed during coding phase. Notifying ExamService.";
                m_examService->handleAppCloseDuringCoding();
            }
        }
    });
}
`;

const variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] } // Expo Out easing
    }
};

export default function CodeShowcase() {
    return (
        <motion.div
            className="relative mt-12 md:mt-16"
            variants={variants}
            initial="hidden"
            animate="visible"
        >

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-linear-bg via-linear-bg/80 to-transparent z-10"></div>
            <div className="relative max-w-3xl mx-auto p-4 sm:p-6 bg-linear-gray-dark border border-linear-border rounded-lg shadow-card overflow-hidden">
                <div className="flex items-center space-x-1.5 mb-3 px-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
                <pre className="text-[11px] sm:text-[12px] leading-relaxed font-mono text-linear-text-secondary overflow-x-auto p-2 bg-black/20 rounded-md">
              <code>{codeSnippet}</code>
          </pre>
            </div>
        </motion.div>
    );
}