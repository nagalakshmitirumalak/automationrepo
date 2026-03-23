var guidewireURLs;
(function (guidewireURLs) {
    guidewireURLs["policyCenterURL"] = "https://dev.techieassociates.com/pc/PolicyCenter.do";
    guidewireURLs["billingCenterURL"] = "https://dev.techieassociates.com/bc/BillingCenter.do";
    guidewireURLs["claimCenterURL"] = "https://dev.techieassociates.com/cc/ClaimCenter.do";
    guidewireURLs["contactManagerURL"] = "https://dev.techieassociates.com/ab/ContactManager.do";
})(guidewireURLs || (guidewireURLs = {}));
function getURL(URL) {
    return URL;
}
var pcURL = getURL(guidewireURLs.policyCenterURL);
console.log("PC URL : ", pcURL);
function isGWURL(gwURL) {
    // if(gwURL === guidewireURLs.policyCenterURL || gwURL === guidewireURLs.billingCenterURL || gwURL === guidewireURLs.claimCenterURL || gwURL === guidewireURLs.contactManagerURL){
    //     return true;
    // }
    // else 
    //     return false;
    return Object.values(guidewireURLs).includes(gwURL);
}
console.log("Is GW URL : ", isGWURL("www.google.com"));
