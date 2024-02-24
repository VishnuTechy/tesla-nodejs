const express = require('express');
const app = express();
const port = 3000;

// Define a simple route
app.get('/api/hello', (req, res) => {
  res.json({ status: 'Success',body: [
    {
      name: "Tesla Model 3",
      price: "$47,490",
      Range: "341miles (EPA est.)",
      Seating: "5 seats",
      "Cargo Capacity": "24 cu ft",
      Drive: "AWD Dual Motor",
      defimage:
        "https://www.topgear.com/sites/default/files/2023/11/TopGear%20-%20Tesla%20Model%203%20-%20Facelift%20-1.jpg",
      image: {
        "Deep Blue Metallic":
          "https://imgd.aeplcdn.com/370x208/n/lnk9cva_1595893.jpg?q=80",
        "Midnight Silver Metallic":
          "https://imgd.aeplcdn.com/370x208/n/qf79cva_1595895.jpg?q=80",
        "Pearl White Multi-Coat":
          "https://imgd.aeplcdn.com/370x208/n/kqn9cva_1595897.jpg?q=80",
        "Red Multi-Coat":
          "https://imgd.aeplcdn.com/370x208/n/b469cva_1595899.jpg?q=80",
        "Solid Black":
          "https://imgd.aeplcdn.com/370x208/n/gkq9cva_1595901.jpg?q=80",
      },
      colors: [
        "Deep Blue Metallic",
        "Midnight Silver Metallic",
        "Pearl White Multi-Coat",
        "Red Multi-Coat",
        "Solid Black",
      ],
    },
    {
      name: "Tesla Model S",
      price: "$74,990",
      Range: "405miles (EPA est.)",
      Seating: "5 seats",
      "Cargo Capacity": "28 cu ft",
      Drive: "AWD Dual Motor",
      defimage:
        "https://media.autoexpress.co.uk/image/private/s--_4ro-Cun--/f_auto,t_content-image-full-mobile@1/v1689934611/autoexpress/2023/07/Tesla%20Model%20S%20Plaid%20001_yujihf.jpg",
      image: {
        "Pearl White":
          "https://img.gaadicdn.com/images/car-images/930x620/Tesla/Model-S/5252/1611841114159/225_Pearl-White-Multi-Coat_bfc3c2.jpg",
        "Solid Black":
          "https://img.gaadicdn.com/images/car-images/930x620/Tesla/Model-S/5252/1611841114159/224_Solid-Black_141414.jpg",
        "Silver Metallic":
          "https://img.gaadicdn.com/images/car-images/930x620/Tesla/Model-S/5252/1611841114159/223_Midnight-Silver-Metallic_7b7e84.jpg",
        "Deep Blue Metallic":
          "https://img.gaadicdn.com/images/car-images/930x620/Tesla/Model-S/5252/1611841114159/222_Deep-Blue-Metallic_1e3e7b.jpg",
        Red: "https://img.gaadicdn.com/images/car-images/930x620/Tesla/Model-S/5252/1611841114159/221_Red-Multi-Coat_870e14.jpg",
      },
      colors: [
        "Pearl White",
        "Solid Black",
        "Silver Metallic",
        "Deep Blue Metallic",
        "Red",
      ],
    },
    {
      name: "Tesla Model Y",
      price: "$47,990",
      Range: "310miles (EPA est.)",
      Seating: "7 seats",
      "Cargo Capacity": "76 cu ft",
      Drive: "AWD Dual Motor",
      defimage:
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190315013221_Tesla-model_y_front_34_blue.jpg&w=700&q=90&c=1",
      image: {
        "Pearl White":
          "https://m.atcdn.co.uk/ect/media/w1224/c7b571c06b4646f9801063abe87a601b.jpg",
        "Solid Black":
          "https://m.atcdn.co.uk/ect/media/w1224/23b19c08dbc445cb8f8d583641b0e9e2.jpg",
        "Midnight Silver":
          "https://m.atcdn.co.uk/ect/media/w1224/f880dcab617a4e6995b221c5e0594b2f.jpg",
        "Deep Blue":
          "https://m.atcdn.co.uk/ect/media/w1224/f685e049547c41bf803984242f7016e1.jpg",
        Red: "https://m.atcdn.co.uk/ect/media/w1224/78a30f6cf6ea4186aaba0b03b8584019.jpg",
      },
      colors: [
        "Pearl White",
        "Solid Black",
        "Midnight Silver",
        "Deep Blue",
        "Red",
      ],
    },
  ] });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
