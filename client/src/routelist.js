export default [
    {
        id: 1,
        URLpath: "/",
        dirpath: "./views/Landing/NewLanding"
    },
    {
        id: 2,
        URLpath: "/login",
        dirpath: "./views/Login/Login"
    },
    {
        id: 3,
        URLpath: "/signup",
        dirpath: "./views/SignUp/SignUp"
    },
    {
        id: 4,
        URLpath: "/contact",
        dirpath: "./views/Contact/Contact"
    },
    {
        id: 5,
        URLpath: "/my/create",
        dirpath: "./views/Questions/Questions",
        status: "protected"
    },
    {
        id: 6,
        URLpath: "/about",
        dirpath: "./views/About/About"
    },
    {
        id: 7,
        URLpath: "/press",
        dirpath: "./views/Press/Press"
    },
    {
        id: 8,
        URLpath: "/privacypolicy",
        dirpath: "./views/PrivacyAndTerms/PrivacyAndTerms"
    },
    {
        id: 9,
        URLpath: "/story",
        dirpath: "./views/OurStory/OurStory"
    },
    {
        id: 10,
        URLpath: "/registry",
        dirpath: "./views/Registry/NewSections_test/NewRegistry"
    },
    {
        id: 11,
        URLpath: "/whattodonow",
        dirpath: "./views/WhatToDoNow/WhatToDoNow"
    },
    {
        id: 12,
        URLpath: "/templatedigitalmemory",
        dirpath: "./views/TemplateDigitalMemory/TemplateDigitalMemory",
        //status: "protected"
    },
    /*
    {
        id: 13,
        URLpath: "/templatedigitalmemoryeditor",
        dirpath: "./views/TemplateDigitalMemory/TemplateDigitalMemoryEditor",
        //status: "protected"
    },
    */
    {
        id: 14,
        URLpath: "/template2digitalmemory",
        dirpath: "./views/Template2DigitalMemory/Template2DigitalMemory",
        //status: "protected"
    },
    /*
    {
        id: 15,
        URLpath: "/template2digitalmemoryeditor",
        dirpath: "./views/Template2DigitalMemory/Template2DigitalMemoryEditor",
        //status: "protected"
    },
    */
    {
        id: 16,
        URLpath: "/faq",
        dirpath: "./views/FAQ/FAQ"
    },
    {
        id: 17,
        URLpath: "/digitalmemory/" + localStorage.getItem("unique_url"),
        dirpath: "./views/User2DigitalMemory/Template2DigitalMemory",
        status: "protected"
    },
    {
        id: 17,
        URLpath: "/digitalmemoryeditor",
        dirpath: "./views/User2DigitalMemory/Template2DigitalMemoryEditor",
        status: "protected"
    },
]
