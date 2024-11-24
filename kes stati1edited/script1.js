const laptopDetails = {
    1: {
        title: "Acer Aspire 5",
        specs: {
            ram: "8GB RAM",
            storage: "512GB SSD",
            processor: "Intel i5 11th gen",
            gpu: "intel UHD Graphics",
            display: "15.6-inch FHD display",
            os: "Windows 11"
        },
        price: "₱25,000",
        image: "Boldly Brewed/Laptop/Aspire5.png"
    },
    2: {
        title: "Acer Aspire 3",
        specs: {
            ram: "8GB RAM",
            storage: "512GB SSD",
            processor: "Intel i3 11th gen",
            gpu: "intel UHD Graphics",
            display: "14-inch HD display",
            os: "Windows 11"
        },
        price: "₱20,000",
        image: "Boldly Brewed/Laptop/aspire3.png"
    },
    3: {
        title: "Asus Vivobook 16",
        specs: {
            ram: "16GB RAM",
            storage: "512GB SSD",
            processor: "Intel i5 12th gen",
            gpu: "intel UHD Graphics",
            display: "16-inch HD display",
            os: "Windows 11"
        },
        price: "₱35,699",
        image: "Boldly Brewed/Laptop/Vivobook.png"
    },
    4: {
        title: "Acer Chromebook Plus 515",
        specs: {
            ram: "8GB RAM",
            storage: "512GB SSD",
            processor: "Intel i7 11th gen",
            gpu: "intel UHD Graphics",
            display: "15.6” Full HD display",
            os: "Windows 11"
        },
        price: "₱34,000",
        image: "Boldly Brewed/Laptop/acerChromeBook.png"
    },
    5: {
        title: "Lenovo IdeaPad Slim 3",
        specs: {
            ram: "16GB LPDDR4",
            storage: "512GB SSD",
            processor: "AMD Ryzen 5 7530U",
            gpu: "AMD Radeon Graphics",
            display: "15.6” FHD (1920 x 1080) ",
            os: "Windows 11"
        },
        price: "₱27,638",
        image: "Boldly Brewed/Laptop/lenovoIdeaPad.png"
    },
    6: {
        title: "HP 14",
        specs: {
            ram: "4GB RAM",
            storage: "240GB SSD",
            processor: "Ryzen 3 3250U",
            gpu: "AMD Radeon Graphics",
            display: "14 inch” Full HD display",
            os: "Windows 10"
        },
        price: "₱16,599",
        image: "Boldly Brewed/Laptop/HP14.png"
    },
    7: {
        title: "MSI Raider GE78",
        specs: {
            ram: "32GB RAM",
            storage: "1TB SSD",
            processor: "Intel i7 13th gen",
            gpu: "NVIDIA GeForce RTX 4090",
            display: "17 QHD+ (2560x1600), 240Hz, IPS-Level",
            os: "Windows 11"
        },
        price: "₱88,000",
        image: "Boldly Brewed/Laptop2/1.png"
    },
    8: {
        title: "MSI GF63 Thin",
        specs: {
            ram: "16GB RAM",
            storage: "1TB SSD",
            processor: "Intel i5 13th gen",
            gpu: "NVIDIA GeForce RTX 3050",
            display: "15.6 FHD (1920x1080) 144Hz IPS-Level)",
            os: "Windows 11"
        },
        price: "₱53,000",
        image: "Boldly Brewed/Laptop2/2.png"
    },
    9: {
        title: "Asus ROG Zephyrus",
        specs: {
            ram: "32GB RAM",
            storage: "2TB SSD",
            processor: "Intel i9 14th gen",
            gpu: "NVIDIA GeForce RTX 4070",
            display: "16 QHD+ (2560 x 1600, WQXGA) 240Hz",
            os: "Windows 11"
        },
        price: "₱108,000",
        image: "Boldly Brewed/Laptop2/3.png"
    },
    10: {
        title: "Asus TUF Gaming",
        specs: {
            ram: "16GB RAM",
            storage: "500GB SSD",
            processor: "Intel i5 13th gen",
            gpu: "NVIDIA GeForce RTX 3050",
            display: "15.6 FHD (1920x1080) 144Hz IPS-Level",
            os: "Windows 11"
        },
        price: "₱60,000",
        image: "Boldly Brewed/Laptop2/4.png"
    },
    11: {
        title: "Asus Nitro V",
        specs: {
            ram: "16GB RAM",
            storage: "500GB SSD",
            processor: "Intel i5 13th gen",
            gpu: "NVIDIA GeForce RTX 3050",
            display: "15.6 FHD (1920x1080) 144Hz IPS-Level",
            os: "Windows 11"
        },
        price: "₱69,000",
        image: "Boldly Brewed/Laptop2/5.png"
    },
    12: {
        title: "Asus Predator Helios Neo 16",
        specs: {
            ram: "16GB RAM",
            storage: "1TB SSD",
            processor: "Intel i7 13th gen",
            gpu: "NVIDIA GeForce RTX 3050",
            display: "15.6 FHD (1920x1080) 144Hz IPS-Level",
            os: "Windows 11"
        },
        price: "₱79,999",
        image: "Boldly Brewed/Laptop2/6.png"
    },
    13: {
        title: "Zenbook S 13 OLED",
        specs: {
            ram: "16GB RAM",
            storage: "1TB SSD",
            processor: "AMD Ryzen™ 7 6800U",
            gpu: "AMD Radeon™ graphics",
            display: "13.3 16:10 2.8K OLED NanoEdge touchscreen",
            os: "Windows 11 Pro"
        },
        price: "₱63,000",
        image: "Boldly Brewed/Laptop3/1.png"
    },
    14: {
        title: "Zenbook S UX393",
        specs: {
            ram: "16GB RAM",
            storage: "1TB SSD",
            processor: "Intel Core i7 11th gen",
            gpu: "Intel Iris XE Graphics",
            display: "14inch touchscreen OLED",
            os: "Windows 11"
        },
        price: "₱85,883",
        image: "Boldly Brewed/Laptop3/2.png"
    },
    15: {
        title: "MacBook Air 13",
        specs: {
            ram: "8GB RAM",
            storage: "1TB SSD",
            processor: "Apple M2 Chip",
            gpu: "8-Core GPU",
            display: "13.6-inch Liquid Retina display with True Tone²",
            os: "macOS Big Sur"
        },
        price: "₱59,990",
        image: "Boldly Brewed/Laptop3/3.png"
    },
    16: {
        title: "MacBook Pro 14",
        specs: {
            ram: "16GB RAM",
            storage: "1TB SSD",
            processor: "Apple M4 Chip",
            gpu: "10-Core GPU",
            display: "14-inch Liquid Retina XDR display²",
            os: "macOS Big Sur"
        },
        price: "₱99,990",
        image: "Boldly Brewed/Laptop3/4.png"
    },
    17: {
        title: "Lenovo Thinkbook 14 Gen6",
        specs: {
            ram: "16GB RAM",
            storage: "250GB SSD",
            processor: "AMD Ryzen™ 5 7430U",
            gpu: "AMD Radeon Graphics",
            display: "14 WUXGA (1920 x 1200), IPS",
            os: "Windows 11"
        },
        price: "₱35,000",
        image: "Boldly Brewed/Laptop3/5.png"
    },
    18: {
        title: "MSI Modern 15 - B12M",
        specs: {
            ram: "16GB RAM",
            storage: "500GB SSD",
            processor: "AMD Ryzen 7 7730U",
            gpu: "AMD Radeon Graphics",
            display: "15.6 FHD (1920x1080), IPS-Level",
            os: "Windows 11"
        },
        price: "₱40,499",
        image: "Boldly Brewed/Laptop3/6.png"
    },
    19: {
        title: "Dell XPS 17 (9730)",
        specs: {
            ram: "16GB RAM",
            storage: "500GB SSD",
            processor: "Intel Core i7-13700H",
            gpu: "Nvidia GeForce RTX 4050",
            display: "17-inch, FHD+ 1920x1200, 60Hz,",
            os: "Windows 11"
        },
        price: "₱94,244",
        image: "Boldly Brewed/Laptop4/1.png"
    },
    20: {
        title: "ROG Zephyrus Duo 16 (2023)",
        specs: {
            ram: "64GB RAM",
            storage: "2TB SSD",
            processor: "Ryzen™ 9 7945HX",
            gpu: "Nvidia GeForce RTX 4090",
            display: "16 240Hz QHD+ WQXGA Anti-Glare Wide View LED Back-lit Narrow Border Display ",
            os: "Windows 11"
        },
        price: "₱242,900",
        image: "Boldly Brewed/Laptop4/2.png"
    },
    21: {
        title: "Microsoft Surface Laptop Studio 2",
        specs: {
            ram: "16GB RAM",
            storage: "1TB SSD",
            processor: "IntelFootnote® Core™ i7-13700H",
            gpu: "Nvidia GeForce RTX 4050",
            display: "Touchscreen: 14.4” PixelSense™ Flow DisplayFootnote3 ",
            os: "Windows 11"
        },
        price: "₱111,923",
        image: "Boldly Brewed/Laptop4/3.png"
    },
    22: {
        title: "MSI Creator A16 AI",
        specs: {
            ram: "32GB RAM",
            storage: "1TB SSD",
            processor: "Ryzen™ AI 9 HX 370",
            gpu: "Nvidia GeForce RTX 4070",
            display: "16 UHD+ (3840x2400), 16:10, MiniLED, 120Hz Refresh Rate",
            os: "Windows 11"
        },
        price: "₱106,018",
        image: "Boldly Brewed/Laptop4/4.png"
    },
    23: {
        title: "Acer Swift X 14",
        specs: {
            ram: "32GB RAM",
            storage: "1TB SSD",
            processor: " Intel® Core™ Ultra 7",
            gpu: "Nvidia GeForce RTX 4070",
            display: "14.5 WQXGA+ (2880 x 1800) 16:10 CineCrystal 144hz",
            os: "Windows 11"
        },
        price: "₱82,649",
        image: "Boldly Brewed/Laptop4/5.png"
    },
};

function showDetails(laptopId) {
    const laptop = laptopDetails[laptopId];

    if (laptop) {
        document.getElementById("modal-title").innerText = laptop.title;
        document.getElementById("modal-specs").innerHTML = `
            <strong>Specs:</strong><br>
            RAM: ${laptop.specs.ram}<br>
            Storage: ${laptop.specs.storage}<br>
            Processor: ${laptop.specs.processor}<br>
            GPU: ${laptop.specs.gpu}<br>
            Display: ${laptop.specs.display}<br>
            OS: ${laptop.specs.os}
        `;
        document.getElementById("modal-price").innerText = `Price: ${laptop.price}`;
        document.getElementById("modal-image").src = laptop.image;
        document.getElementById("modal-image").alt = laptop.title;
        document.getElementById("laptop-modal").style.display = "block";
    }
}

function closeModal() {
    document.getElementById("laptop-modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("laptop-modal");
    if (event.target === modal) {
        closeModal();
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const modalImage = document.querySelector(".modal img");
    const fixedWidth = 500;
    const fixedHeight = 300;

    modalImage.style.width = `${fixedWidth}px`;
    modalImage.style.height = `${fixedHeight}px`;
    modalImage.style.objectFit = "contain";
});


