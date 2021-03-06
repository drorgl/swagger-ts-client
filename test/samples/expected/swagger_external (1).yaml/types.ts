/*****************************AutoGenerated Code : Do not edit *******************************/
// Type generated from Swagger definition

/*
    Dealer API 1.0
    The Dealer API provides Dealer search functions.
    
    Contact:
    The open API platform by arik-Benz
    
    
*/



    
    /**
     * the representation of a link
     */
    
    export interface ILink  {
        /*
         * the target of the link
         */
        href? : string;
   
    }
         
    /**
     * self links
     */
    
    export interface ISelfLink  {
        self? : ILink;
   
    }
         
    /**
     * default links
     */
    
    export interface IDefaultLinks  {
        self? : ILink;
        next? : ILink;
        previous? : ILink;
   
    }
         
    export interface IProductGroupOfAFunction  {
        /*
         * The product group code, valid values are:
         * * PASSENGER-CAR
         * * VAN
         */
        code? : string;
        /*
         * product group name
         */
        name? : string;
   
    }
         
    export interface IAddress  {
        /*
         * street and house number, if applicable
         */
        street? : string;
        /*
         * address addition
         */
        addressAddition? : string;
        /*
         * postal code
         */
        zipCode? : string;
        /*
         * city
         */
        city? : string;
        /*
         * district, area of city
         */
        district? : string;
        /*
         * ISO A2 country code
         */
        countryIsoCode? : string;
   
    }
         
    export interface ICommunicationChannels  {
        general? : IGeneral;
   
    }
         
    export interface IActivityOfAFunction  {
        /*
         * The activity of the dealer, valid actitvity values are:
         * * PARTS: Spare Parts Sales
         * * SALES: Sales of new vehicles
         * * SERVICE: Maintaining and repair
         * * USED-VEHICLES-TRADE: Sales of used vehicles
         */
        code? : string;
        /*
         * the corresponding activity name
         */
        name? : string;
   
    }
         
    export interface ITheDistance  {
        /*
         * numeric amount of distance
         */
        value? : number;
        /*
         * unit of length
         */
        unit? : string;
   
    }
         
    export interface IFunctionOpeningHours  {
        function? : IFunction;
        weekdays? : IWeekdays;
   
    }
         
    export interface IFunction  {
        brand? : IBrand;
        productGroup? : IProductGroupOfAFunction;
        activity? : IActivityOfAFunction;
   
    }
         
    /**
     * dealer with navigation links.
     */
    
    export interface IHalifiedDealers  {
        _links? : IDefaultLinks;
        /*
         * dealers
         */
        dealers? : Array<IDealer>;
   
    }
         
    /**
     * the representation of an dealer
     */
    
    export interface IDealer  {
        _links? : ISelfLink;
        /*
         * GSSN unique ID, main identifier
         */
        dealerId? : string;
        /*
         * legal name of the company
         */
        legalName? : string;
        /*
         * name addition, country specific use
         */
        nameAddition? : string;
        /*
         * network brand codes of the dealer, dealer numbers
         */
        brandCodes? : Array<IBrandCode>;
        address? : IAddress;
        region? : IRegionRepresentation;
        geoCoordinates? : IGeoCoordinates;
        communication? : ICommunicationChannels;
        distance? : ITheDistance;
        /*
         * list of functions for the dealer
         */
        functions? : Array<IFunction>;
        /*
         * List of opening hours for each customer relevant function
         * for
         * each day
         * 
         */
        openingHours? : Array<IFunctionOpeningHours>;
   
    }
         
    /**
     * opening hours for a week, represented by a map where the
     * key
     * is a weekday and the value is an object containing the time
     * periods. There
     * are a maximum of two time slots for each day. If there
     * exists no opening
     * hours for one day, they will be shown as closed.
     * 
     */
    
    export interface IWeekdays  {
        MONDAY? : IWeekdayInfo;
        TUESDAY? : IWeekdayInfo;
        WEDNESDAY? : IWeekdayInfo;
        THURSDAY? : IWeekdayInfo;
        FRIDAY? : IWeekdayInfo;
        SATURDAY? : IWeekdayInfo;
        SUNDAY? : IWeekdayInfo;
   
    }
         
    export interface IWeekdayInfo  {
        /*
         * status (OPEN or CLOSED)
         */
        status? : string;
        /*
         * time periods
         */
        periods? : Array<IPeriods>;
   
    }
         
    export interface IBrand  {
        /*
         * brand qualifier
         */
        code? : string;
        /*
         * brand name
         */
        name? : string;
   
    }
         
    export interface IPeriods  {
        /*
         * from
         */
        from? : string;
        /*
         * until
         */
        until? : string;
   
    }
         
    export interface IBrandCode  {
        brand? : IBrand;
   
    }
         
    /**
     * countries and navigation links for additional results.
     */
    
    export interface IHalifiedCountries  {
        _links? : IDefaultLinks;
        /*
         * countries
         */
        countries? : Array<ICountry>;
   
    }
         
    export interface ICountry  {
        /*
         * the country id
         */
        countryId? : string;
        /*
         * the country iso code
         */
        isoCode? : string;
        /*
         * the country name
         */
        name? : string;
   
    }
         
    export interface IGeneral  {
        /*
         * general fax number
         */
        fax? : string;
        /*
         * general email address
         */
        email? : string;
        /*
         * general website
         */
        website? : string;
        /*
         * general facebook URL
         */
        facebook? : string;
        /*
         * general mobile phone number
         */
        mobile? : string;
        /*
         * general googlePlus account name
         */
        googlePlus? : string;
        /*
         * general twitter account name
         */
        twitter? : string;
        /*
         * general phone number
         */
        phone? : string;
   
    }
         
    export interface IRegionRepresentation  {
        /*
         * region
         */
        region? : string;
        /*
         * subregion
         */
        subRegion? : string;
   
    }
         
    export interface IGeoCoordinates  {
        /*
         * latitude - in decimal degrees
         */
        latitude? : number;
        /*
         * longitude - in decimal degrees
         */
        longitude? : number;
   
    }
     