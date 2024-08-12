function generateTableRow(item, rowspan = 1, isHidden = false) {
    const idSplit = item.id.split('-');
    const kode1 = idSplit[0];
    const kode2 = idSplit[1];

    const name = item.data.name;
    const gender = item.data.gender === 'M' ? 'Male' : 'Female';
    const genderColor = item.data.gender === 'M' ? 'bg-yellow-400' : 'bg-red-400';
    const grade = item.data.grade;
    const gradeColor = grade % 2 === 1 ? 'text-red-500' : 'text-black';
    const className = item.data.class;
    const old = item.data.old;
    const nik = item.data.nik;
    const skills = item.data.skill.map(s => s.name).join(', ').replace(/,([^,]*)$/, ' dan$1');

    return `
        <tr>
            <td class="py-2 px-4 border-b" ${isHidden ? 'style="display: none;"' : ''} ${rowspan > 1 ? 'rowspan="' + rowspan + '"' : ''}>${kode1}</td>
            <td class="py-2 px-4 border-b">${kode2}</td>
            <td class="py-2 px-4 border-b ${genderColor}">${name}</td>
            <td class="py-2 px-4 border-b">${gender}</td>
            <td class="py-2 px-4 border-b ${gradeColor}">${grade}</td>
            <td class="py-2 px-4 border-b">${className}</td>
            <td class="py-2 px-4 border-b">${old}</td>
            <td class="py-2 px-4 border-b">${nik}</td>
            <td class="py-2 px-4 border-b">${skills}</td>
        </tr>
    `;
}
