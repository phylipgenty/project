document.addEventListener('DOMContentLoaded', function() {
    // Select all quantity control containers
    const quantityControls = document.querySelectorAll('.quantity-control');

    quantityControls.forEach(control => {
        const minusBtn = control.querySelector('.minus');
        const plusBtn = control.querySelector('.plus');
        const quantitySpan = control.querySelector('.quantity'); // This span holds the number
        const addToCartBtn = control.nextElementSibling; // The Add to Cart button is the next sibling

        // Initialize currentQuantity for each product based on its HTML content
        let currentQuantity = parseInt(quantitySpan.textContent);

        // Function to update the UI (span text, button disabled states)
        function refreshUI() {
            quantitySpan.textContent = currentQuantity;

            // Disable minus button if quantity is 0
            if (currentQuantity <= 0) {
                minusBtn.disabled = true;
                if (addToCartBtn) {
                    addToCartBtn.disabled = true; // Disable Add to Cart if quantity is 0
                }
            } else {
                minusBtn.disabled = false;
                if (addToCartBtn) {
                    addToCartBtn.disabled = false; // Enable Add to Cart if quantity is > 0
                }
            }
        }

        // Set initial UI state when the page loads for each product
        refreshUI();

        // Event listener for minus button
        minusBtn.addEventListener('click', function() {
            if (currentQuantity > 0) { // Only decrease if greater than 0
                currentQuantity--;
                refreshUI();
            }
        });

        // Event listener for plus button
        plusBtn.addEventListener('click', function() {
            currentQuantity++;
            refreshUI();
        });

        // Add to Cart button logic (to prevent adding 0 quantity)
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', function(event) {
                if (currentQuantity === 0) {
                    event.preventDefault(); // Stop the default button action
                    alert('Please select a quantity greater than 0 to add to cart.');
                }
                // If currentQuantity > 0, your existing add to cart logic would run here
                // (e.g., sending data to a server or updating a cart display)
            });
        }
    });
});
