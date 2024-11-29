function createBtns() {
    var final = '';
    fetch("./cities.json")
    .then(res => res.json())
    .then(data => {
        Object.keys(data).forEach(element => {
            const faName = data[element];
            const btn = `<button class="hidden btn w-full flex justify-between border-b-[1px] border-card-border py-2 px-2 hover:bg-[rgb(255,255,255)]" id="${element}">
            <span class="text-left">${element}</span>
            <span class="text-right">${faName}</span>
            </button>`;
            final += btn;
        }); 
        postMessage(final);
    }
);  
}
createBtns();