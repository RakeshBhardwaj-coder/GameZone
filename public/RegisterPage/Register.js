document.addEventListener('DOMContentLoaded', function() {
    const plans = document.querySelectorAll('.plan');

    plans.forEach(plan => {
        plan.addEventListener('touchstart', function() {
            this.classList.add('hover');
        });

        plan.addEventListener('touchend', function() {
            this.classList.remove('hover');
        });
    });
});