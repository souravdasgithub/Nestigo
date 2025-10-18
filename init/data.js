// ...existing code...
const sampleListings = [
  {
    title: "Oceanfront Luxury Resort",
    description: "Experience world-class comfort with stunning ocean views, infinity pool, and private beach access.",
    image: {
      filename: "ListingImage",
      url: "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1320"
    },
    price: 4500,
    location: "Goa",
    country: "India"
  },
  {
    title: "Mountain Retreat Hotel",
    description: "A cozy hotel nestled in the hills offering breathtaking mountain views and warm hospitality.",
    image: {
      filename: "ListingImage",
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    price: 2200,
    location: "Manali",
    country: "India"
  },
  {
    title: "City Lights Apartment",
    description: "Modern city apartment with skyline views, premium furnishings, and easy metro access.",
    image: {
      filename: "ListingImage",
      url: "https://images.unsplash.com/photo-1560448071-f869d46d320b?auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Royal Heritage Palace",
    description: "Live like royalty in this beautifully restored palace with grand interiors and garden courtyards.",
    image: {
      filename: "ListingImage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" 

    },
    price: 5000,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Beachside Boutique Hotel",
    description: "Relax in style at this boutique hotel steps away from the beach with luxurious rooms and spa services.",
    image: {
      filename: "ListingImage",
      url: "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    price: 3800,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Countryside Farmstay",
    description: "A peaceful farmhouse surrounded by nature, offering organic meals and fresh air.",
    image: {
      filename: "ListingImage",
      url: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
    },
    price: 1600,
    location: "Punjab",
    country: "India"
  },
  {
    title: "Lakeside Resort & Spa",
    description: "Enjoy tranquility by the lake with luxury spa treatments and boat rides.",
    image: {
      filename: "ListingImage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    price: 3200,
    location: "Nainital",
    country: "India"
  },
  {
    title: "Desert Oasis Resort",
    description: "A perfect mix of tradition and comfort, this desert resort offers camel rides and campfire evenings.",
    image: {
      filename: "ListingImage",
      url: "https://images.unsplash.com/photo-1506059612708-99d6c258160e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
    },
    price: 2100,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Luxury Villa Retreat",
    description: "A private villa with a pool, modern interiors, and complete privacy for your family vacation.",
    image: {
      filename: "ListingImage",
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
    },
    price: 4000,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Modern Riverside Hotel",
    description: "Wake up to the sound of flowing water in this sleek riverside hotel with open balconies.",
    image: {
      filename: "ListingImage",
      url: "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    price: 2700,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Forest View Resort",
    description: "Surrounded by dense greenery, this resort offers peaceful vibes and scenic hiking trails nearby.",
    image: {
      filename: "ListingImage",
      url: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    price: 2300,
    location: "Wayanad",
    country: "India"
  },
  {
    title: "Ski Chalet Lodge",
    description: "A luxurious chalet in snowy mountains, complete with fireplaces and hot tubs.",
    image: {
      filename: "ListingImage",
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    price: 5000,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Urban Business Hotel",
    description: "A high-end hotel for business travelers offering meeting rooms, cafes, and skyline views.",
    image: {
      filename: "ListingImage",
      url: "hhttps://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
    },
    price: 3500,
    location: "Singapore",
    country: "Singapore"
  },
  {
    title: "Coastal View Apartment",
    description: "A modern apartment overlooking the sea, with fully equipped kitchen and balcony views.",
    image: {
      filename: "ListingImage",
      url: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
    },
    price: 2900,
    location: "Chennai",
    country: "India"
  },
  {
    title: "Hilltop Boutique Stay",
    description: "Luxury rooms with panoramic hill views and outdoor dining under the stars.",
    image: {
      filename: "ListingImage",
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    price: 3100,
    location: "Kodaikanal",
    country: "India"
  },
  {
    title: "Private Island Bungalow",
    description: "Stay in this romantic bungalow surrounded by clear blue waters and palm trees.",
    image: {
      filename: "ListingImage",
      url: "https://plus.unsplash.com/premium_photo-1661964301291-75df9dd37f23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives"
  },
  {
    title: "Vintage Colonial Hotel",
    description: "A charming colonial-style hotel with wooden interiors and historic vibes.",
    image: {
      filename: "ListingImage",
      url: "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1059"
    },
    price: 2500,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Luxury Urban Penthouse",
    description: "An elegant penthouse with rooftop views, jacuzzi, and private bar setup.",
    image: {
      filename: "ListingImage",
      url: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
    },
    price: 5500,
    location: "New York",
    country: "USA"
  },
  {
    title: "Seaside Family Resort",
    description: "Spacious resort for families with a kids’ pool, restaurant, and beach access.",
    image: {
      filename: "ListingImage",
      url: "https://images.unsplash.com/photo-1454388683759-ee76c15fee26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    price: 3200,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Rustic Hill Resort",
    description: "A warm and rustic hill resort with cozy cottages, bonfire nights, and nature walks.",
    image: {
      filename: "ListingImage",
      url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    price: 1900,
    location: "Munnar",
    country: "India"
  }
];

module.exports = { data: sampleListings };
