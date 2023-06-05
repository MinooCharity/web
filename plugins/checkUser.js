// plugins/google.gtag.client.js with "mode": "client

export default () => {

    if (process.client) {
        let script = window.document.createElement("script")
        script.async = true
        script.id = "gtag"
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-7BFYDEC3DP"

        window.document.head.appendChild(script)

        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-7BFYDEC3DP');

    } else {

    }

}