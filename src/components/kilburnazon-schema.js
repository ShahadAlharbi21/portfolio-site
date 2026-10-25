// Exact fields, keys, labels and relative arrangement transcribed from the supplied instructions.
// Orthogonal connections use crow's-foot endpoints; no commentary is displayed in the viewer.
export const schemaTables = [
  {
    "name": "Department",
    "x": 2800,
    "y": 100,
    "width": 660,
    "fields": [
      {
        "name": "Department_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "department_name",
        "key": "",
        "definition": "VARCHAR(50), NOT NULL"
      }
    ]
  },
  {
    "name": "Department_Office",
    "x": 3000,
    "y": 440,
    "width": 660,
    "fields": [
      {
        "name": "Department_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "office_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      }
    ]
  },
  {
    "name": "Office",
    "x": 3900,
    "y": 100,
    "width": 660,
    "fields": [
      {
        "name": "Office_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "office_name",
        "key": "",
        "definition": "VARCHAR(50), NOT NULL"
      },
      {
        "name": "address",
        "key": "",
        "definition": "VARCHAR(50), NOT NULL"
      }
    ]
  },
  {
    "name": "position",
    "x": 1900,
    "y": 860,
    "width": 660,
    "fields": [
      {
        "name": "Position_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "position_name",
        "key": "",
        "definition": "VARCHAR(100), NOT NULL"
      }
    ]
  },
  {
    "name": "Role",
    "x": 100,
    "y": 1100,
    "width": 660,
    "fields": [
      {
        "name": "Role_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "role_name",
        "key": "",
        "definition": "VARCHAR(100)"
      }
    ]
  },
  {
    "name": "Employees_Role",
    "x": 1000,
    "y": 1100,
    "width": 660,
    "fields": [
      {
        "name": "Employees_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "Role_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      }
    ]
  },
  {
    "name": "Employees",
    "x": 2800,
    "y": 860,
    "width": 660,
    "fields": [
      {
        "name": "Employees_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC"
      },
      {
        "name": "name",
        "key": "",
        "definition": "VARCHAR(225), NOT NULL"
      },
      {
        "name": "salary",
        "key": "",
        "definition": "INT, NULL"
      },
      {
        "name": "email",
        "key": "",
        "definition": "VARCHAR(225), NOT NULL, UNIQUE"
      },
      {
        "name": "dob",
        "key": "",
        "definition": "DATE"
      },
      {
        "name": "home_address",
        "key": "",
        "definition": "VARCHAR(225)"
      },
      {
        "name": "hired_date",
        "key": "",
        "definition": "DATE, NOT NULL"
      },
      {
        "name": "nin",
        "key": "",
        "definition": "VARCHAR(12), NOT NULL"
      },
      {
        "name": "Holiday_Tracker_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      },
      {
        "name": "Position_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      },
      {
        "name": "Department_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      },
      {
        "name": "Role_ID",
        "key": "FK",
        "definition": "INT, NULL"
      },
      {
        "name": "Office_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      },
      {
        "name": "Emergency_Details_ID",
        "key": "FK",
        "definition": "INT"
      },
      {
        "name": "Contract_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      }
    ]
  },
  {
    "name": "Contract",
    "x": 1900,
    "y": 1500,
    "width": 660,
    "fields": [
      {
        "name": "ContractID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "contract_type",
        "key": "",
        "definition": "ENUM('Full-Time', 'Part-Time', 'Freelance'), NOT NULL"
      }
    ]
  },
  {
    "name": "Emergency_Details",
    "x": 1900,
    "y": 1820,
    "width": 660,
    "fields": [
      {
        "name": "Emergency_Details_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "emergency_name",
        "key": "",
        "definition": "VARCHAR(50), NULL"
      },
      {
        "name": "emergency_relationship",
        "key": "",
        "definition": "VARCHAR(50), NULL"
      },
      {
        "name": "emergency_phone",
        "key": "",
        "definition": "VARCHAR(50), NULL"
      }
    ]
  },
  {
    "name": "Holiday_Tracker",
    "x": 2800,
    "y": 2000,
    "width": 660,
    "fields": [
      {
        "name": "Holiday_Tracker_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "years_worked",
        "key": "",
        "definition": "INT, DEFAULT 0"
      },
      {
        "name": "holidays_taken",
        "key": "",
        "definition": "INT, DEFAULT 0"
      },
      {
        "name": "holidays_left",
        "key": "",
        "definition": "INT, DEFAULT 0"
      }
    ]
  },
  {
    "name": "Employees_AnnualLeave",
    "x": 3400,
    "y": 2400,
    "width": 660,
    "fields": [
      {
        "name": "Employees_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "Annual_Leave_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      }
    ]
  },
  {
    "name": "Annual_Leave",
    "x": 3400,
    "y": 2700,
    "width": 660,
    "fields": [
      {
        "name": "Annual_Leave_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "start_date",
        "key": "",
        "definition": "DATE, NULL"
      },
      {
        "name": "end_date",
        "key": "",
        "definition": "DATE, NULL"
      }
    ]
  },
  {
    "name": "Delivery_Driver",
    "x": 3900,
    "y": 1060,
    "width": 660,
    "fields": [
      {
        "name": "Employees_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "on_leave",
        "key": "",
        "definition": "BOOLEAN, DEFAULT FALSE, NOT NULL"
      }
    ]
  },
  {
    "name": "Delivery_Status",
    "x": 3700,
    "y": 1400,
    "width": 660,
    "fields": [
      {
        "name": "Delivery_Status_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "delivery_status",
        "key": "",
        "definition": "ENUM('Pending', 'Shipped', 'Delivered', 'Failed'), DEFAULT 'Pending'"
      }
    ]
  },
  {
    "name": "Car_Brand",
    "x": 3900,
    "y": 500,
    "width": 660,
    "fields": [
      {
        "name": "Car_Brand_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "car_brand_name",
        "key": "",
        "definition": "VARCHAR(50), NOT NULL"
      }
    ]
  },
  {
    "name": "Vehicles",
    "x": 4800,
    "y": 500,
    "width": 660,
    "fields": [
      {
        "name": "Vehicles_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "Colour_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      },
      {
        "name": "Car_Brand_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      }
    ]
  },
  {
    "name": "Colour",
    "x": 5700,
    "y": 600,
    "width": 660,
    "fields": [
      {
        "name": "Colour_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "colour_name",
        "key": "",
        "definition": "VARCHAR(50), NOT NULL"
      }
    ]
  },
  {
    "name": "Delivery_Process",
    "x": 4800,
    "y": 1060,
    "width": 660,
    "fields": [
      {
        "name": "Delivery_Process_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "date",
        "key": "",
        "definition": "DATE, NOT NULL"
      },
      {
        "name": "Employees_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      },
      {
        "name": "Vehicle_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      },
      {
        "name": "Delivery_Status_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      }
    ]
  },
  {
    "name": "Distribution_Centres",
    "x": 5700,
    "y": 1160,
    "width": 660,
    "fields": [
      {
        "name": "Office_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      }
    ]
  },
  {
    "name": "Products_Distribution_Centres",
    "x": 6600,
    "y": 860,
    "width": 660,
    "fields": [
      {
        "name": "Products_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "Distribution_Centres",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      }
    ]
  },
  {
    "name": "Customers",
    "x": 3900,
    "y": 1860,
    "width": 660,
    "fields": [
      {
        "name": "Customers_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "name",
        "key": "",
        "definition": "VARCHAR(50), NOT NULL"
      },
      {
        "name": "address",
        "key": "",
        "definition": "VARCHAR(100), NOT NULL"
      },
      {
        "name": "email",
        "key": "",
        "definition": "VARCHAR(225), NOT NULL, UNIQUE"
      }
    ]
  },
  {
    "name": "Corder",
    "x": 4800,
    "y": 1860,
    "width": 660,
    "fields": [
      {
        "name": "Corder_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "order_status",
        "key": "",
        "definition": "ENUM('verified', 'not verified'), DEFAULT 'not_verified'"
      },
      {
        "name": "customers_ID",
        "key": "FK",
        "definition": "INT, NULL"
      },
      {
        "name": "Delivery_Process_ID",
        "key": "FK",
        "definition": "INT, NULL"
      }
    ]
  },
  {
    "name": "Order_Products",
    "x": 5700,
    "y": 1860,
    "width": 660,
    "fields": [
      {
        "name": "Corder_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "Products_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      }
    ]
  },
  {
    "name": "Products",
    "x": 6600,
    "y": 2000,
    "width": 660,
    "fields": [
      {
        "name": "Products_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "product_name",
        "key": "",
        "definition": "VARCHAR(225), NOT NULL"
      },
      {
        "name": "price",
        "key": "",
        "definition": "INT, NOT NULL"
      },
      {
        "name": "number_available_in_stock",
        "key": "",
        "definition": "INT, NOT NULL"
      },
      {
        "name": "number_of_reviews",
        "key": "",
        "definition": "INT, NOT NULL, DEFAULT 0"
      },
      {
        "name": "number_of_answered_questions",
        "key": "",
        "definition": "INT, NOT NULL, DEFAULT 0"
      },
      {
        "name": "average_review_rating",
        "key": "",
        "definition": "DECIMAL(2,1), DEFAULT 0.0"
      },
      {
        "name": "description",
        "key": "",
        "definition": "VARCHAR(2000), NOT NULL"
      },
      {
        "name": "Manufacturer_ID",
        "key": "FK",
        "definition": "INT, NULL"
      },
      {
        "name": "Category_ID1",
        "key": "FK",
        "definition": "INT, NULL"
      },
      {
        "name": "Category_ID2",
        "key": "FK",
        "definition": "INT, NULL"
      },
      {
        "name": "Category_ID3",
        "key": "FK",
        "definition": "INT, NULL"
      },
      {
        "name": "Category_ID4",
        "key": "FK",
        "definition": "INT, NULL"
      }
    ]
  },
  {
    "name": "Manufacturer",
    "x": 7500,
    "y": 1460,
    "width": 660,
    "fields": [
      {
        "name": "Manufacturer_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "manufacturer_name",
        "key": "",
        "definition": "VARCHAR(100), NOT NULL"
      }
    ]
  },
  {
    "name": "Category1",
    "x": 7500,
    "y": 1700,
    "width": 660,
    "fields": [
      {
        "name": "Category1_ID",
        "key": "PK",
        "definition": "INT"
      },
      {
        "name": "category_name",
        "key": "",
        "definition": ""
      }
    ]
  },
  {
    "name": "Category2",
    "x": 8400,
    "y": 1700,
    "width": 660,
    "fields": [
      {
        "name": "Category2_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "category_name",
        "key": "",
        "definition": "VARCHAR(20), NOT NULL"
      },
      {
        "name": "Category1_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      }
    ]
  },
  {
    "name": "Category3",
    "x": 8400,
    "y": 2100,
    "width": 660,
    "fields": [
      {
        "name": "Category3_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "category_name",
        "key": "",
        "definition": "VARCHAR(20), NOT NULL"
      },
      {
        "name": "Category2_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      }
    ]
  },
  {
    "name": "Category4",
    "x": 8400,
    "y": 2500,
    "width": 660,
    "fields": [
      {
        "name": "Category4_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "category_name",
        "key": "",
        "definition": "VARCHAR(20), NOT NULL"
      },
      {
        "name": "Category3_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      }
    ]
  },
  {
    "name": "Questions",
    "x": 5500,
    "y": 2500,
    "width": 660,
    "fields": [
      {
        "name": "Question_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "question_content",
        "key": "",
        "definition": "VARCHAR(200), NOT NULL, UNIQUE"
      }
    ]
  },
  {
    "name": "Answers",
    "x": 4500,
    "y": 2400,
    "width": 660,
    "fields": [
      {
        "name": "Answer_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "answer_content",
        "key": "",
        "definition": "VARCHAR(200)"
      },
      {
        "name": "Product_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      },
      {
        "name": "Customers_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      },
      {
        "name": "Question_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      }
    ]
  },
  {
    "name": "Reviews",
    "x": 4500,
    "y": 2900,
    "width": 660,
    "fields": [
      {
        "name": "Reviews_ID",
        "key": "PK",
        "definition": "INT, AUTO_INC, NOT NULL"
      },
      {
        "name": "review_rating",
        "key": "",
        "definition": "INT, NOT NULL, DEFAULT 0"
      },
      {
        "name": "Customers_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      },
      {
        "name": "Product_ID",
        "key": "FK",
        "definition": "INT, NOT NULL"
      }
    ]
  }
];

export const schemaRelationships = [
  {
    "parent": "Department",
    "child": "Department_Office",
    "parentColumn": "Department_ID",
    "column": "Department_ID",
    "label": "",
    "parentMultiplicity": "||",
    "childMultiplicity": "|<"
  },
  {
    "parent": "Office",
    "child": "Department_Office",
    "parentColumn": "Office_ID",
    "column": "office_ID",
    "label": "",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Department_Office",
    "child": "Employees",
    "parentColumn": null,
    "column": null,
    "label": "works in",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "position",
    "child": "Employees",
    "parentColumn": "Position_ID",
    "column": "Position_ID",
    "label": "works as",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Role",
    "child": "Employees_Role",
    "parentColumn": "Role_ID",
    "column": "Role_ID",
    "label": "",
    "parentMultiplicity": "||",
    "childMultiplicity": "|<"
  },
  {
    "parent": "Employees_Role",
    "child": "Employees",
    "parentColumn": "Employees_ID",
    "column": "Employees_ID",
    "label": "",
    "parentMultiplicity": "o<",
    "childMultiplicity": "||"
  },
  {
    "parent": "Contract",
    "child": "Employees",
    "parentColumn": "ContractID",
    "column": "Contract_ID",
    "label": "has",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Emergency_Details",
    "child": "Employees",
    "parentColumn": "Emergency_Details_ID",
    "column": "Emergency_Details_ID",
    "label": "has",
    "parentMultiplicity": "o|",
    "childMultiplicity": "||"
  },
  {
    "parent": "Employees",
    "child": "Delivery_Driver",
    "parentColumn": "Employees_ID",
    "column": "Employees_ID",
    "label": "is",
    "parentMultiplicity": "||",
    "childMultiplicity": "o|"
  },
  {
    "parent": "Employees",
    "child": "Holiday_Tracker",
    "parentColumn": "Holiday_Tracker_ID",
    "column": "Holiday_Tracker_ID",
    "label": "has",
    "parentMultiplicity": "|<",
    "childMultiplicity": "||"
  },
  {
    "parent": "Employees",
    "child": "Employees_AnnualLeave",
    "parentColumn": "Employees_ID",
    "column": "Employees_ID",
    "label": "",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Employees_AnnualLeave",
    "child": "Annual_Leave",
    "parentColumn": "Annual_Leave_ID",
    "column": "Annual_Leave_ID",
    "label": "",
    "parentMultiplicity": "|<",
    "childMultiplicity": "||"
  },
  {
    "parent": "Delivery_Driver",
    "child": "Delivery_Process",
    "parentColumn": "Employees_ID",
    "column": "Employees_ID",
    "label": "is assigned",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Delivery_Status",
    "child": "Delivery_Process",
    "parentColumn": "Delivery_Status_ID",
    "column": "Delivery_Status_ID",
    "label": "has",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Vehicles",
    "child": "Delivery_Process",
    "parentColumn": "Vehicles_ID",
    "column": "Vehicle_ID",
    "label": "used for",
    "parentMultiplicity": "||",
    "childMultiplicity": "|<"
  },
  {
    "parent": "Car_Brand",
    "child": "Vehicles",
    "parentColumn": "Car_Brand_ID",
    "column": "Car_Brand_ID",
    "label": "creates",
    "parentMultiplicity": "||",
    "childMultiplicity": "|<"
  },
  {
    "parent": "Colour",
    "child": "Vehicles",
    "parentColumn": "Colour_ID",
    "column": "Colour_ID",
    "label": "has",
    "parentMultiplicity": "||",
    "childMultiplicity": "|<"
  },
  {
    "parent": "Office",
    "child": "Distribution_Centres",
    "parentColumn": "Office_ID",
    "column": "Office_ID",
    "label": "is",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Distribution_Centres",
    "child": "Products_Distribution_Centres",
    "parentColumn": "Office_ID",
    "column": "Distribution_Centres",
    "label": "",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Products_Distribution_Centres",
    "child": "Products",
    "parentColumn": "Products_ID",
    "column": "Products_ID",
    "label": "creates",
    "parentMultiplicity": "|<",
    "childMultiplicity": "||"
  },
  {
    "parent": "Delivery_Process",
    "child": "Corder",
    "parentColumn": "Delivery_Process_ID",
    "column": "Delivery_Process_ID",
    "label": "includes",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Customers",
    "child": "Corder",
    "parentColumn": "Customers_ID",
    "column": "customers_ID",
    "label": "places",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Corder",
    "child": "Order_Products",
    "parentColumn": "Corder_ID",
    "column": "Corder_ID",
    "label": "",
    "parentMultiplicity": "||",
    "childMultiplicity": "|<"
  },
  {
    "parent": "Order_Products",
    "child": "Products",
    "parentColumn": "Products_ID",
    "column": "Products_ID",
    "label": "",
    "parentMultiplicity": "o<",
    "childMultiplicity": "||"
  },
  {
    "parent": "Corder",
    "child": "Answers",
    "parentColumn": null,
    "column": null,
    "label": "belongs to",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Customers",
    "child": "Answers",
    "parentColumn": "Customers_ID",
    "column": "Customers_ID",
    "label": "gives",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Customers",
    "child": "Reviews",
    "parentColumn": "Customers_ID",
    "column": "Customers_ID",
    "label": "gives",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Questions",
    "child": "Answers",
    "parentColumn": "Question_ID",
    "column": "Question_ID",
    "label": "",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Answers",
    "child": "Products",
    "parentColumn": "Product_ID",
    "column": "Products_ID",
    "label": "have",
    "parentMultiplicity": "o<",
    "childMultiplicity": "||"
  },
  {
    "parent": "Reviews",
    "child": "Products",
    "parentColumn": "Product_ID",
    "column": "Products_ID",
    "label": "have",
    "parentMultiplicity": "o<",
    "childMultiplicity": "||"
  },
  {
    "parent": "Manufacturer",
    "child": "Products",
    "parentColumn": "Manufacturer_ID",
    "column": "Manufacturer_ID",
    "label": "creates",
    "parentMultiplicity": "||",
    "childMultiplicity": "|<"
  },
  {
    "parent": "Category1",
    "child": "Category2",
    "parentColumn": "Category1_ID",
    "column": "Category1_ID",
    "label": "organizes",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Category2",
    "child": "Category3",
    "parentColumn": "Category2_ID",
    "column": "Category2_ID",
    "label": "organizes",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Category3",
    "child": "Category4",
    "parentColumn": "Category3_ID",
    "column": "Category3_ID",
    "label": "organizes",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Products",
    "child": "Category1",
    "parentColumn": "Category_ID1",
    "column": "Category1_ID",
    "label": "belongs to",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Products",
    "child": "Category2",
    "parentColumn": "Category_ID2",
    "column": "Category2_ID",
    "label": "belongs to",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Products",
    "child": "Category3",
    "parentColumn": "Category_ID3",
    "column": "Category3_ID",
    "label": "belongs to",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  },
  {
    "parent": "Products",
    "child": "Category4",
    "parentColumn": "Category_ID4",
    "column": "Category4_ID",
    "label": "belongs to",
    "parentMultiplicity": "||",
    "childMultiplicity": "o<"
  }
];
