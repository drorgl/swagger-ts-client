/*****************************AutoGenerated Code : Do not edit *******************************/
// Type generated from Swagger definition

/*
    OrderStatus 2.1.1
    Retrieve order status for a given order. Also view related
    information such as tracking numbers and shipment info.
*/



    
    /**
     * OrderStatus response
     */
    
    export interface IOrderStatusResponse  {
        /*
         * SalesOrderId
         * @example 12345678
         */
        SalesOrderId? : number;
        /*
         * CustomerNumber
         * @example 1234567
         */
        CustomerNumber? : number;
        /*
         * AccountNumber
         * @example 123456
         */
        AccountNumber? : number;
        /*
         * EmailAddress
         * @example do-not-reply@fakekey.com
         */
        EmailAddress? : string;
        /*
         * PurchaseOrder
         * @example examplePONote
         */
        PurchaseOrder? : string;
        /*
         * PaymentMethod
         * @example VISA
         */
        PaymentMethod? : string;
        /*
         * ShippingMethod
         * @example FedEx Ground
         */
        ShippingMethod? : string;
        /*
         * Backordershippingmethod
         * @example UPS Ground
         */
        BackorderShippingMethod? : string;
        /*
         * Backordershippingmethod
         * @example 123456
         */
        BackorderShipperAccountNumber? : string;
        /*
         * ShipmentType
         * @example Standard
         */
        ShipmentType? : string;
        /*
         * ShipAddress
         */
        ShipAddress? : IAddressInfo;
        /*
         * BillingAddress
         */
        BillingAddress? : IAddressInfo;
        /*
         * Shipping Info
         */
        TrackingDetails? : Array<IShippingDetail>;
        /*
         * OrderInfo
         */
        OrderDetails? : Array<IOrderDetail>;
   
    }
         
    /**
     * AddressInfo
     */
    
    export interface IAddressInfo  {
        /*
         * CompanyName
         * @example fake-Key Electronics
         */
        CompanyName? : string;
        /*
         * FirstName
         * @example John
         */
        FirstName? : string;
        /*
         * LastName
         * @example Doe
         */
        LastName? : string;
        /*
         * Addrline_1
         * @example 701 Brooks Avenue South
         */
        Addrline_1? : string;
        /*
         * Addrline_2
         * @example PO Box 677
         */
        Addrline_2? : string;
        /*
         * Addrline_3
         */
        Addrline_3? : string;
        /*
         * CityName
         * @example Thief River Falls
         */
        CityName? : string;
        /*
         * StateCode
         * @example MN
         */
        StateCode? : string;
        /*
         * ZipCode
         * @example 56701
         */
        ZipCode? : string;
        /*
         * Country
         * @example US
         */
        Country? : string;
   
    }
         
    /**
     * Invoice Object
     */
    
    export interface IShippingDetail  {
        /*
         * CarrierId
         * @example UPS
         */
        CarrierId? : string;
        /*
         * CarrierPackageId
         * @example 123456789
         */
        CarrierPackageId? : string;
        /*
         * ISO 8601 datetime
         * @example 2018-04-18T09:47:46.8626499Z
         */
        DateTransaction? : Date;
        /*
         * ShippingMethod
         * @example UPS Ground
         */
        ShippingMethod? : string;
        /*
         * ShippingURL
         */
        ShippingURL? : string;
        /*
         * InvoiceId
         */
        InvoiceId? : number;
        /*
         * Whether or not the order was cancled or voided
         * @example false
         */
        CanceledOrVoided? : boolean;
   
    }
         
    /**
     * OrderInfo Object
     */
    
    export interface IOrderDetail  {
        /*
         * Quantity
         * @example 10
         */
        Quantity? : number;
        /*
         * PartNumber
         * @example P5555-ND
         */
        PartNumber? : string;
        /*
         * Description
         * @example CAP ALUM 1000UF 20% 35V RADIAL
         */
        Description? : string;
        /*
         * CustomerReference
         * @example example
         */
        CustomerReference? : string;
        /*
         * Backorder
         * @example 5
         */
        Backorder? : number;
        /*
         * UnitPrice
         * @example 0.623
         */
        UnitPrice? : number;
        /*
         * ExtendedPrice
         * @example 6.23
         */
        ExtendedPrice? : number;
        /*
         * QuantityShipped
         * @example 0
         */
        QuantityShipped? : number;
        /*
         * InvoiceId
         * @example 123456789
         */
        InvoiceId? : number;
   
    }
     