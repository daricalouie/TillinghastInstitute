
const searchbar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-submit");

const resultsWindow = document.getElementById("results-window");
const results = document.getElementById("search-results");
const important = document.getElementById("PleaseStopLookingAtMySourceCode");
const aud = document.getElementById("red-herring1");
const gif = document.getElementById("red-herring2");


function searchHandler() {
    s = searchbar.search.value.trim();
    searchterm = s.toLowerCase().replace(/\s/g, '');
    if (btoa(searchterm) == "bnVtZXJvbG9neQ==") {
        important.style.display = "none";
        results.innerHTML = atob("MSByZXN1bHQgZm91bmQgZm9yICJudW1lcm9sb2d5Ijxicj48YnI+ICAgICAgICBOdW1lcm9sb2d5IG51bWJlciBtZWFuaW5nczo8YnI+ICAgICAgICAxOiBUaGUgZ29hbC1kcml2ZW4sIGluZGVwZW5kZW50IGFuZCBpbm5vdmF0aXZlLjxicj4gICAgICAgIDI6IEdlbnRsZSwgaW5kZWNpc2l2ZSBhbmQgc2Vuc2l0aXZlLjxicj4gICAgICAgIDM6IENvbW11bmljYXRpdmUsIGNoYXJtaWMgYW5kIGNyZWF0aXZlLjxicj4gICAgICAgIDQ6IFByYWN0aWNhbCwgbG95YWwgYW5kIGhhcmQtd29ya2luZy48YnI+ICAgICAgICA1LiBDdXJpb3VzLCBhZGFwdGFibGUgYW5kIHJlc291cmNlZnVsLjxicj4gICAgICAgIDYuIFN1cHBvcnRpdmUsIG51cnR1cmluZyBhbmQgcm9tYW50aWMuPGJyPiAgICAgICAgNy4gQW5hbHl0aWNhbCwgc3Bpcml0dWFsIGFuZCBrbm93bGVkZ2VhYmxlLjxicj4gICAgICAgIDguIEVuZHVyaW5nLCBhbWJpdGlvdXMgYW5kIGJhbGFuY2VkLjxicj4gICAgICAgIDkuIEF3YWtlbmluZywgZW5saWdodGVuZWQgYW5kIGhlYWxpbmcuPGJyPg==")
    } else if (btoa(searchterm) == "YXBlcnRpbw==") {
        important.style.display = "block";
        results.innerHTML = "";
        aud.src = atob("aW1nLzdBLm1wMw==");
        gif.src = atob("aW1nL0JvdHRsZUltYWdlc192Mi5naWY=");
    } else {
        important.style.display = "none";
        results.innerHTML = "No results found for \"" + s + "\". Please refine your search.";
    }
    resultsWindow.style.padding = "20px 18px";
    resultsWindow.style.maxHeight = resultsWindow.scrollHeight + "px";


}

searchButton.addEventListener("click", (e) => {
    console.log("search button pressed");
    searchHandler();
});
searchbar.addEventListener('submit', event => {
    // submit event detected
    event.preventDefault()
    console.log("search submitted");
    searchHandler();
});

