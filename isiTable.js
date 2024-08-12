function isiTable(data) {
    const tableBody = document.getElementById('table-body');

    data.data.sort((a, b) => {
        const [kode1A, kode2A] = a.id.split('-');
        const [kode1B, kode2B] = b.id.split('-');

        if (kode1A === kode1B) {
            return kode2A.localeCompare(kode2B);
        }
        return kode1A.localeCompare(kode1B);
    });

    const groupRow = {};
    data.data.forEach(item => {
        const idSplit = item.id.split('-');
        const kode1 = idSplit[0];
        if (!groupRow[kode1]) {
            groupRow[kode1] = [];
        }
        groupRow[kode1].push(item);
    });

    let rows = [];
    Object.keys(groupRow).forEach(kode1 => {
        const items = groupRow[kode1];
        const rowspan = items.length;

        items.forEach((item, index) => {
            const isHidden = index !== 0;
            rows.push(generateTableRow(item, rowspan, isHidden));
        });
    });

    tableBody.innerHTML = rows.join('');
}
