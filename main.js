function generateURL(protocol, domain, path){
    return `${protocol}://${domain}/${path}`;
}

const url = generateURL("https", "google.com", "/example");
console.log(url);

