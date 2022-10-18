function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal(e) {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    e.preventDefault();
}

function closeModal2() {
    const modal2 = document.getElementById("lighthouse_modal");
    modal2.style.display = "none";
}
