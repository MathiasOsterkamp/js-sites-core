module Pzl.Sites.Core.Schema {
    export interface IRegionalSettings {
        AdjustHijriDays: number;
        //AlternateCalendarType = "pnp:CalendarType"
        //CalendarType = "pnp:CalendarType"
        Collation: number;
        //FirstDayOfWeek = "pnp:DayOfWeek"
        FirstWeekOfYear: number;
        LocaleId: number;
        ShowWeeks: boolean;
        Time24: boolean;
        //TimeZone = "pnp:ReplaceableInt"
        // WorkDayEndHour = "pnp:WorkHour"
        WorkDays: number;
        // WorkDayStartHour = "pnp:WorkHour"
    }
    export class RegionalSettings implements IRegionalSettings {
        AdjustHijriDays: number;
        //AlternateCalendarType = "pnp:CalendarType"
        //CalendarType = "pnp:CalendarType"
        Collation: number;
        //FirstDayOfWeek = "pnp:DayOfWeek"
        FirstWeekOfYear: number;
        LocaleId: number;
        ShowWeeks: boolean;
        Time24: boolean;
        //TimeZone = "pnp:ReplaceableInt"
        // WorkDayEndHour = "pnp:WorkHour"
        WorkDays: number;
        // WorkDayStartHour = "pnp:WorkHour"
    }
}