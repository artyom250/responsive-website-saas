document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".pricing .buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Check if the yearly change button was clicked
            if (this.classList.contains('yearly-change-btn')) {
                // Update Pro plan price for yearly
                document.querySelectorAll('.pack .price')[1].innerHTML = "$4.00<span>/month</span>";

                // Update Team plan price for yearly
                document.querySelectorAll('.pack .price')[2].innerHTML = "$6.00<span>/month</span>";

                // Display the sale label
                document.querySelectorAll('.sale').forEach(function(saleLabel) {
                    saleLabel.style.display = 'block';
                });
            } else if (this.classList.contains('monthly-btn')) {
                // Reset Pro plan price to monthly
                document.querySelectorAll('.pack .price')[1].innerHTML = "$5.00<span>/month</span>";

                // Reset Team plan price to monthly
                document.querySelectorAll('.pack .price')[2].innerHTML = "$8.00<span>/month</span>";

                // Hide the sale label
                document.querySelectorAll('.sale').forEach(function(saleLabel) {
                    saleLabel.style.display = 'none';
                });
            }
        });
    });
});

function sidebarFunc() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
}