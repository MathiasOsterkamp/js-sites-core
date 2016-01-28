module Pzl.Sites.Core.Schema {
    export interface IRegionalSettings {
        AdjustHijriDays: number;
        
        Collation: number;
 
        FirstWeekOfYear: number;
        LocaleId: number;
        ShowWeeks: boolean;
        Time24: boolean;
 
        WorkDays: number;
   

        AlternateCalendarType: number;
        FirstDayOfWeek: number;
        TimeZone: number;
        WorkDayEndHour: number;
        WorkDayStartHour: number;
    }
    export class RegionalSettings implements IRegionalSettings {
        AdjustHijriDays: number;

        Collation: number;

        FirstWeekOfYear: number;
        LocaleId: number;
        ShowWeeks: boolean;
        Time24: boolean;

        WorkDays: number;



        AlternateCalendarType: number;
        FirstDayOfWeek: number;
        TimeZone: number;
        WorkDayEndHour: number;
        WorkDayStartHour: number;
    }
}