function countClosedCabinets() {
    document.getElementById("startButton").classList.add('hidden');
    const totalCabinets = 100;
    let cabinets = new Array(totalCabinets).fill(false); // همه کمدها بسته هستند
    const cabinetsDiv = document.getElementById("cabinets");
    cabinetsDiv.innerHTML = '';

    // نفر اول همه کمدها را باز می‌کند
    for (let i = 0; i < totalCabinets; i++) {
        cabinets[i] = true; // باز کردن کمدها
        updateCabinetDisplay(cabinets, cabinetsDiv);
    }

    // نفرات بعدی با تاخیر
    let person = 2;
    function processNextPerson() {
        if (person > totalCabinets) {
            const closedCount = cabinets.filter(cabinet => !cabinet).length;
            alert(`تعداد کمدهای بسته: ${closedCount}`);
            return;
        }

        for (let i = person - 1; i < totalCabinets; i += person) {
            cabinets[i] = !cabinets[i]; // معکوس کردن وضعیت کمد
            const action = cabinets[i] ? "باز" : "بسته";
            console.log(`نفر ${person} کمد ${i + 1} را ${action} کرد.`);
        }

        updateCabinetDisplay(cabinets, cabinetsDiv);
        person++;
        setTimeout(processNextPerson, 500); // تاخیر یک ثانیه بین نفرات
    }

    processNextPerson(); // شروع پردازش نفرات
}

function updateCabinetDisplay(cabinets, container) {
    container.innerHTML = '';
    cabinets.forEach((cabinet, index) => {
        const cabinetDiv = document.createElement('div');
        cabinetDiv.className = `cabinet ${cabinet ? 'open' : ''}`;
        cabinetDiv.innerText = index + 1; // شماره کمد
        container.appendChild(cabinetDiv);
    });
}

document.getElementById("startButton").onclick = countClosedCabinets;
