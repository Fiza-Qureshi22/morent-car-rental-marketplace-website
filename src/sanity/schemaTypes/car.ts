const carSchema = {
  name: 'car',
  type: 'document',
  title: 'Car',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Car Name',
    },
    {
      name: 'brand',
      type: 'string',
      title: 'Brand',
      description: 'Brand of the car (e.g., Nissan, Tesla, etc.)',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Car Type',
      description: 'Type of the car (e.g., Sport, Sedan, SUV, etc.)',
    },
    {
      name: 'fuelCapacity',
      type: 'number',  // changed to number for consistency
      title: 'Fuel Capacity',
      description: 'Fuel capacity or battery capacity in liters or kWh',
    },
    {
      name: 'transmission',
      type: 'array', // changed to array for multiple transmission types
      title: 'Transmission',
      description: 'Type of transmission (e.g., Manual, Automatic)',
      of: [{ type: 'string' }]
    },
    {
      name: 'seatingCapacity',
      type: 'number', // changed to number for capacity
      title: 'Seating Capacity',
      description: 'Number of seats (e.g., 2 People, 4 seats)',
    },
    {
      name: 'pricePerDay',
      type: 'number',  // changed to number for price
      title: 'Price Per Day',
      description: 'Rental price per day in USD',
    },
    {
      name: 'originalPrice',
      type: 'number',  // changed to number for price
      title: 'Original Price',
      description: 'Original price before discount (if applicable)',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Tags for categorization (e.g., popular, recommended)',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Car Image',
      options: {
        hotspot: true,
      },
    }
  ],
};

export default carSchema;
