VANTA.FOG({
            el: "#background-effect",
            highlightColor: 0xff4d00,
            midtoneColor: 0x590000,
            lowlightColor: 0x1a0000,
            speed: 4
        });

        const roles = ["Frontend Developer", "UI/UX Enthusiast", "Creative Coder", "Tech Innovator"];
        let index = 0;
        function changeRole() {
            document.getElementById("animated-text").innerText = roles[index];
            index = (index + 1) % roles.length;
        }
        setInterval(changeRole, 2000);