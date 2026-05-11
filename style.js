</body> <script>
document.querySelectorAll('.buy-now-btn').forEach((button, index) => {
    button.addEventListener('click', function() {
        // එක් එක් බටන් එකට අදාළ ලින්ක් මෙහි සඳහන් කරන්න
        const links = [
            "https://link-for-item-1.com",
            "https://link-for-item-2.com",
            "https://link-for-item-3.com",
            "https://link-for-item-4.com"
        ];

        if (links[index]) {
            window.open(links[index], '_blank'); // අලුත් ටැබ් එකක ලින්ක් එක විවෘත වේ
        }
    });
});
</script>