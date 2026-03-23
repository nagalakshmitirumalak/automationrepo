enum guidewireURLs{
    policyCenterURL = "https://dev.techieassociates.com/pc/PolicyCenter.do",
    billingCenterURL = "https://dev.techieassociates.com/bc/BillingCenter.do",
    claimCenterURL ="https://dev.techieassociates.com/cc/ClaimCenter.do",
    contactManagerURL = "https://dev.techieassociates.com/ab/ContactManager.do"
}

function getURL(URL : guidewireURLs): guidewireURLs{
    return URL;
}

let pcURL = getURL(guidewireURLs.policyCenterURL);
console.log("PC URL : ", pcURL);

function isGWURL(gwURL: String): boolean {

    return Object.values(guidewireURLs).includes(gwURL as guidewireURLs);

}

console.log("Is GW URL : ", isGWURL("www.google.com"));