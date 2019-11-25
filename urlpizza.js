browser.menus.create({
    id: "urlpizza",
    title: "Shorten",
    contexts: ["link"],
    onclick(info, tab) {

        function getPassword(result) {

            browser.tabs.executeScript(tab.id, {
                frameId: info.frameId,
                code: `

                var request = new XMLHttpRequest();
                request.open('GET', \`https://url.pizza/shorten/${elem.href}\`, false);
                request.send(null);

                if (request.status === 200) {
                    alert(request.responseText)
                }

                `,
            });

            var request = new XMLHttpRequest();
            request.open('GET', `https://url.pizza/shorten/${elem.href}`, false);
            request.send(null);

            if (request.status === 200) {
                alert(request.responseText)
            }
        }

        function onError(error) {
            console.log(`Error: ${error}`);
        }

        var getting = browser.storage.sync.get();
        getting.then(getPassword, onError);


    }
})
