function loadProvenExpertWidget() {
    // Erstellen des div-Elements für das Bewertungssiegel
    var pewlDiv = document.createElement('div');
    pewlDiv.id = 'pewl';
    document.body.appendChild(pewlDiv);

    // Erstellen und Einfügen des Script-Tags für das ProvenExpert-Widget
    var scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.src = 'https://www.provenexpert.com/widget/landing_pg-digital-gmbh.js?feedback=1&avatar=0&competence=1&style=white';
    scriptTag.async = true;
    document.body.appendChild(scriptTag);

    // Erstellen und Einfügen des Link-Tags für das CSS-Stylesheet
    var linkTag = document.createElement('link');
    linkTag.rel = 'stylesheet';
    linkTag.type = 'text/css';
    linkTag.href = 'https://www.provenexpert.com/css/widget_landing.css';
    linkTag.media = 'screen,print';
    document.head.appendChild(linkTag);
}

// Aufruf der Funktion beim Laden der Seite
window.onload = loadProvenExpertWidget;
