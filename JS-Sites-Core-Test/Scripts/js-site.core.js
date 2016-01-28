var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Enums;
            (function (Enums) {
                var BuiltInContentTypeId = (function () {
                    function BuiltInContentTypeId() {
                    } 
                    BuiltInContentTypeId.Contains = function (id) {
                        var s_dict = {};
                        s_dict[this.AdminTask] = true;
                        s_dict[this.Announcement] = true;
                        s_dict[this.BasicPage] = true;
                        s_dict[this.BlogComment] = true;
                        s_dict[this.CallTracking] = true;
                        s_dict[this.Contact] = true;
                        s_dict[this.Discussion] = true;
                        s_dict[this.DisplayTemplateJS] = true;
                        s_dict[this.Document] = true;
                        s_dict[this.DocumentSet] = true;
                        s_dict[this.DocumentWorkflowItem] = true;
                        s_dict[this.DomainGroup] = true;
                        s_dict[this.DublinCoreName] = true;
                        s_dict[this.Event] = true;
                        s_dict[this.FarEastContact] = true;
                        s_dict[this.Folder] = true;
                        s_dict[this.GbwCirculationCTName] = true;
                        s_dict[this.GbwOfficeNoticeCTName] = true;
                        s_dict[this.HealthReport] = true;
                        s_dict[this.HealthRuleDefinition] = true;
                        s_dict[this.Holiday] = true;
                        s_dict[this.IMEDictionaryItem] = true;
                        s_dict[this.Issue] = true;
                        s_dict[this.Item] = true;
                        s_dict[this.Link] = true;
                        s_dict[this.LinkToDocument] = true;
                        s_dict[this.MasterPage] = true;
                        s_dict[this.Message] = true;
                        s_dict[this.ODCDocument] = true;
                        s_dict[this.Person] = true;
                        s_dict[this.Picture] = true;
                        s_dict[this.Resource] = true;
                        s_dict[this.ResourceGroup] = true;
                        s_dict[this.ResourceReservation] = true;
                        s_dict[this.RootOfList] = true;
                        s_dict[this.Schedule] = true;
                        s_dict[this.ScheduleAndResourceReservation] = true;
                        s_dict[this.SharePointGroup] = true;
                        s_dict[this.SummaryTask] = true;
                        s_dict[this.System] = true;
                        s_dict[this.Task] = true;
                        s_dict[this.Timecard] = true;
                        s_dict[this.UDCDocument] = true;
                        s_dict[this.UntypedDocument] = true;
                        s_dict[this.WebPartPage] = true;
                        s_dict[this.WhatsNew] = true;
                        s_dict[this.Whereabouts] = true;
                        s_dict[this.WikiDocument] = true;
                        s_dict[this.WorkflowHistory] = true;
                        s_dict[this.WorkflowTask] = true;
                        s_dict[this.XMLDocument] = true;
                        s_dict[this.XSLStyle] = true;
                        return s_dict[id];
                    };
                    BuiltInContentTypeId.AdminTask = "0x010802";
                    BuiltInContentTypeId.Announcement = "0x0104";
                    BuiltInContentTypeId.BasicPage = "0x010109";
                    BuiltInContentTypeId.BlogComment = "0x0111";
                    BuiltInContentTypeId.BlogPost = "0x0110";
                    BuiltInContentTypeId.CallTracking = "0x0100807FBAC5EB8A4653B8D24775195B5463";
                    BuiltInContentTypeId.Contact = "0x0106";
                    BuiltInContentTypeId.Discussion = "0x012002";
                    BuiltInContentTypeId.DisplayTemplateJS = "0x0101002039C03B61C64EC4A04F5361F3851068";
                    BuiltInContentTypeId.Document = "0x0101";
                    BuiltInContentTypeId.DocumentSet = "0x0120D520";
                    BuiltInContentTypeId.DocumentWorkflowItem = "0x010107";
                    BuiltInContentTypeId.DomainGroup = "0x010C";
                    BuiltInContentTypeId.DublinCoreName = "0x01010B";
                    BuiltInContentTypeId.Event = "0x0102";
                    BuiltInContentTypeId.FarEastContact = "0x0116";
                    BuiltInContentTypeId.Folder = "0x0120";
                    BuiltInContentTypeId.GbwCirculationCTName = "0x01000F389E14C9CE4CE486270B9D4713A5D6";
                    BuiltInContentTypeId.GbwOfficeNoticeCTName = "0x01007CE30DD1206047728BAFD1C39A850120";
                    BuiltInContentTypeId.HealthReport = "0x0100F95DB3A97E8046B58C6A54FB31F2BD46";
                    BuiltInContentTypeId.HealthRuleDefinition = "0x01003A8AA7A4F53046158C5ABD98036A01D5";
                    BuiltInContentTypeId.Holiday = "0x01009BE2AB5291BF4C1A986910BD278E4F18";
                    BuiltInContentTypeId.IMEDictionaryItem = "0x010018F21907ED4E401CB4F14422ABC65304";
                    BuiltInContentTypeId.Issue = "0x0103";
                    BuiltInContentTypeId.Item = "0x01";
                    BuiltInContentTypeId.Link = "0x0105";
                    BuiltInContentTypeId.LinkToDocument = "0x01010A";
                    BuiltInContentTypeId.MasterPage = "0x010105";
                    BuiltInContentTypeId.Message = "0x0107";
                    BuiltInContentTypeId.ODCDocument = "0x010100629D00608F814DD6AC8A86903AEE72AA";
                    BuiltInContentTypeId.Person = "0x010A";
                    BuiltInContentTypeId.Picture = "0x010102";
                    BuiltInContentTypeId.Resource = "0x01004C9F4486FBF54864A7B0A33D02AD19B1";
                    BuiltInContentTypeId.ResourceGroup = "0x0100CA13F2F8D61541B180952DFB25E3E8E4";
                    BuiltInContentTypeId.ResourceReservation = "0x0102004F51EFDEA49C49668EF9C6744C8CF87D";
                    BuiltInContentTypeId.RootOfList = "0x012001";
                    BuiltInContentTypeId.Schedule = "0x0102007DBDC1392EAF4EBBBF99E41D8922B264";
                    BuiltInContentTypeId.ScheduleAndResourceReservation = "0x01020072BB2A38F0DB49C3A96CF4FA85529956";
                    BuiltInContentTypeId.SharePointGroup = "0x010B";
                    BuiltInContentTypeId.SummaryTask = "0x012004";
                    BuiltInContentTypeId.System = "0x";
                    BuiltInContentTypeId.Task = "0x0108";
                    BuiltInContentTypeId.Timecard = "0x0100C30DDA8EDB2E434EA22D793D9EE42058";
                    BuiltInContentTypeId.UDCDocument = "0x010100B4CBD48E029A4AD8B62CB0E41868F2B0";
                    BuiltInContentTypeId.UntypedDocument = "0x010104";
                    BuiltInContentTypeId.WebPartPage = "0x01010901";
                    BuiltInContentTypeId.WhatsNew = "0x0100A2CA87FF01B442AD93F37CD7DD0943EB";
                    BuiltInContentTypeId.Whereabouts = "0x0100FBEEE6F0C500489B99CDA6BB16C398F7";
                    BuiltInContentTypeId.WikiDocument = "0x010108";
                    BuiltInContentTypeId.WorkflowHistory = "0x0109";
                    BuiltInContentTypeId.WorkflowTask = "0x010801";
                    BuiltInContentTypeId.XMLDocument = "0x010101";
                    BuiltInContentTypeId.XSLStyle = "0x010100734778F2B7DF462491FC91844AE431CF";
                    return BuiltInContentTypeId;
                })();
                Enums.BuiltInContentTypeId = BuiltInContentTypeId;
            })(Enums = Core.Enums || (Core.Enums = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Enums;
            (function (Enums) {
                var BuiltInFieldId = (function () {
                    function BuiltInFieldId() {
                    }
                    BuiltInFieldId.Contains = function (fid) {
                        var s_dict = {};
                        s_dict[this.DisplayTemplateJSTargetListTemplate] = true;
                        s_dict[this.Editor] = true;
                        s_dict[this.WebPage] = true;
                        s_dict[this.Profession] = true;
                        s_dict[this.IsNonWorkingDay] = true;
                        s_dict[this.CallTime] = true;
                        s_dict[this.ImageHeight] = true;
                        s_dict[this.EndDate] = true;
                        s_dict[this.Modified_x0020_By] = true;
                        s_dict[this.Last_x0020_Modified] = true;
                        s_dict[this.ThumbnailExists] = true;
                        s_dict[this.RelevantMessages] = true;
                        s_dict[this.ContentLanguages] = true;
                        s_dict[this.MiddleName] = true;
                        s_dict[this.HolidayWork] = true;
                        s_dict[this.AllowEditing] = true;
                        s_dict[this.HealthReportSeverity] = true;
                        s_dict[this._EditMenuTableEnd] = true;
                        s_dict[this.OffsiteParticipant] = true;
                        s_dict[this.CallBack] = true;
                        s_dict[this.Location] = true;
                        s_dict[this.Comments] = true;
                        s_dict[this.ParentID] = true;
                        s_dict[this.OtherAddressCity] = true;
                        s_dict[this.LinkIssueIDNoMenu] = true;
                        s_dict[this.Created_x0020_Date] = true;
                        s_dict[this.Gender] = true;
                        s_dict[this.WorkflowDisplayName] = true;
                        s_dict[this.SpouseName] = true;
                        s_dict[this.Service] = true;
                        s_dict[this.Date] = true;
                        s_dict[this.HTML_x0020_File_x0020_Type] = true;
                        s_dict[this.Resolved] = true;
                        s_dict[this.User] = true;
                        s_dict[this.RelatedItems] = true;
                        s_dict[this.URL] = true;
                        s_dict[this.Detail] = true;
                        s_dict[this.RecurrenceID] = true;
                        s_dict[this.AppAuthor] = true;
                        s_dict[this.HealthRuleSchedule] = true;
                        s_dict[this.ParentItemEditor] = true;
                        s_dict[this.DLC_Duration] = true;
                        s_dict[this.HomeAddressStateOrProvince] = true;
                        s_dict[this.Company] = true;
                        s_dict[this.Until] = true;
                        s_dict[this.CheckoutUser] = true;
                        s_dict[this.ThreadingControls] = true;
                        s_dict[this.FirstName] = true;
                        s_dict[this.From] = true;
                        s_dict[this.DefaultCssFile] = true;
                        s_dict[this.DiscussionTitle] = true;
                        s_dict[this.FullBody] = true;
                        s_dict[this.WorkflowVersion] = true;
                        s_dict[this.VirusStatus] = true;
                        s_dict[this.FirstNamePhonetic] = true;
                        s_dict[this.DisplayTemplateJSIconUrl] = true;
                        s_dict[this.End] = true;
                        s_dict[this.EncodedAbsThumbnailUrl] = true;
                        s_dict[this.Description] = true;
                        s_dict[this.DisplayTemplateJSTargetContentType] = true;
                        s_dict[this.V4HolidayDate] = true;
                        s_dict[this.EmailSubject] = true;
                        s_dict[this.IMEComment1] = true;
                        s_dict[this.ThreadTopic] = true;
                        s_dict[this.List] = true;
                        s_dict[this.Oof] = true;
                        s_dict[this.ContactInfo] = true;
                        s_dict[this.SendEmailNotification] = true;
                        s_dict[this._HasCopyDestinations] = true;
                        s_dict[this.ParentFolderId] = true;
                        s_dict[this.NoCodeVisibility] = true;
                        s_dict[this.AttendeeStatus] = true;
                        s_dict[this.PercentComplete] = true;
                        s_dict[this.Body] = true;
                        s_dict[this.HealthReportCategory] = true;
                        s_dict[this._CheckinComment] = true;
                        s_dict[this._Revision] = true;
                        s_dict[this.Expires] = true;
                        s_dict[this.Email2] = true;
                        s_dict[this.HomeAddressCity] = true;
                        s_dict[this.Whereabout] = true;
                        s_dict[this.ComputerNetworkName] = true;
                        s_dict[this.File_x0020_Type] = true;
                        s_dict[this.Out] = true;
                        s_dict[this.AdminTaskDescription] = true;
                        s_dict[this.RelatedIssues] = true;
                        s_dict[this.DisplayTemplateJSConfigurationUrl] = true;
                        s_dict[this._ModerationStatus] = true;
                        s_dict[this.DisplayTemplateJSTargetScope] = true;
                        s_dict[this.ParentItemID] = true;
                        s_dict[this.WorkflowItemId] = true;
                        s_dict[this.ShortestThreadIndexIdLookup] = true;
                        s_dict[this.Workspace] = true;
                        s_dict[this.OrganizationalIDNumber] = true;
                        s_dict[this.ScheduledWork] = true;
                        s_dict[this.Role] = true;
                        s_dict[this.MobilePhone] = true;
                        s_dict[this.Break] = true;
                        s_dict[this.IMEComment3] = true;
                        s_dict[this.RadioNumber] = true;
                        s_dict[this.SipAddress] = true;
                        s_dict[this._Comments] = true;
                        s_dict[this.GoFromHome] = true;
                        s_dict[this.HealthRuleReportLink] = true;
                        s_dict[this.ReferredBy] = true;
                        s_dict[this.GoingHome] = true;
                        s_dict[this.WorkState] = true;
                        s_dict[this.ImageWidth] = true;
                        s_dict[this.ShortestThreadIndexId] = true;
                        s_dict[this.UserField4] = true;
                        s_dict[this._Publisher] = true;
                        s_dict[this.ThreadIndex] = true;
                        s_dict[this.WorkflowOutcome] = true;
                        s_dict[this.AssignedTo] = true;
                        s_dict[this.SelectedFlag] = true;
                        s_dict[this.Keywords] = true;
                        s_dict[this.SelectTitle] = true;
                        s_dict[this.HomeAddressStreet] = true;
                        s_dict[this.ID] = true;
                        s_dict[this.Thumbnail] = true;
                        s_dict[this.TaskCompanies] = true;
                        s_dict[this.LastReplyBy] = true;
                        s_dict[this.IMEComment2] = true;
                        s_dict[this.ConnectionType] = true;
                        s_dict[this.UserField3] = true;
                        s_dict[this.BaseAssociationGuid] = true;
                        s_dict[this.MyEditor] = true;
                        s_dict[this.V4SendTo] = true;
                        s_dict[this.HasCustomEmailBody] = true;
                        s_dict[this.WorkflowName] = true;
                        s_dict[this.GbwCategory] = true;
                        s_dict[this.MessageId] = true;
                        s_dict[this.PreviewOnForm] = true;
                        s_dict[this.Indentation] = true;
                        s_dict[this.OtherAddressCountry] = true;
                        s_dict[this.EmailBody] = true;
                        s_dict[this._Coverage] = true;
                        s_dict[this.fAllDayEvent] = true;
                        s_dict[this.PendingModTime] = true;
                        s_dict[this.BillingInformation] = true;
                        s_dict[this.Combine] = true;
                        s_dict[this.URLwMenu] = true;
                        s_dict[this.FullName] = true;
                        s_dict[this.OtherAddressPostalCode] = true;
                        s_dict[this.LinkFilename] = true;
                        s_dict[this.HomeAddressCountry] = true;
                        s_dict[this._EditMenuTableStart] = true;
                        s_dict[this._CopySource] = true;
                        s_dict[this.Author] = true;
                        s_dict[this.EmailReferences] = true;
                        s_dict[this.Department] = true;
                        s_dict[this.HealthRuleVersion] = true;
                        s_dict[this.CustomerID] = true;
                        s_dict[this.Modified] = true;
                        s_dict[this.Priority] = true;
                        s_dict[this.RulesUrl] = true;
                        s_dict[this._Author] = true;
                        s_dict[this.AdminTaskAction] = true;
                        s_dict[this.PersonViewMinimal] = true;
                        s_dict[this.HealthRuleAutoRepairEnabled] = true;
                        s_dict[this.LinkDiscussionTitleNoMenu] = true;
                        s_dict[this.Home2Number] = true;
                        s_dict[this.GovernmentIDNumber] = true;
                        s_dict[this.Confirmations] = true;
                        s_dict[this.WorkflowTemplate] = true;
                        s_dict[this.XSLStyleIconUrl] = true;
                        s_dict[this.PublishedDate] = true;
                        s_dict[this.OtherFaxNumber] = true;
                        s_dict[this.PrincipalCount] = true;
                        s_dict[this.ParentLeafName] = true;
                        s_dict[this.DisplayTemplateJSTargetControlType] = true;
                        s_dict[this.XSLStyleBaseView] = true;
                        s_dict[this._Format] = true;
                        s_dict[this.NameOrTitle] = true;
                        s_dict[this.LeaveEarly] = true;
                        s_dict[this.WorkflowInstance] = true;
                        s_dict[this._SharedFileIndex] = true;
                        s_dict[this.PagerNumber] = true;
                        s_dict[this.EncodedAbsWebImgUrl] = true;
                        s_dict[this.Participants] = true;
                        s_dict[this.RepairDocument] = true;
                        s_dict[this.HealthReportExplanation] = true;
                        s_dict[this.ContentType] = true;
                        s_dict[this._RightsManagement] = true;
                        s_dict[this.LinkDiscussionTitle2] = true;
                        s_dict[this.Purpose] = true;
                        s_dict[this._LastPrinted] = true;
                        s_dict[this.PersonalWebsite] = true;
                        s_dict[this.ConfirmedTo] = true;
                        s_dict[this.Group] = true;
                        s_dict[this.TaskDueDate] = true;
                        s_dict[this.ShowCombineView] = true;
                        s_dict[this.LinkTitleNoMenu] = true;
                        s_dict[this.FileDirRef] = true;
                        s_dict[this.Name] = true;
                        s_dict[this.TaskType] = true;
                        s_dict[this.FileLeafRef] = true;
                        s_dict[this.TemplateUrl] = true;
                        s_dict[this.Overtime] = true;
                        s_dict[this.AlternateThumbnailUrl] = true;
                        s_dict[this.CallbackNumber] = true;
                        s_dict[this.Hobbies] = true;
                        s_dict[this.ShortComment] = true;
                        s_dict[this._EditMenuTableStart2] = true;
                        s_dict[this._UIVersionString] = true;
                        s_dict[this.WorkflowInstanceID] = true;
                        s_dict[this.XMLTZone] = true;
                        s_dict[this.EmailCalendarSequence] = true;
                        s_dict[this.wic_System_Copyright] = true;
                        s_dict[this.Confidential] = true;
                        s_dict[this.WorkflowLink] = true;
                        s_dict[this.ResolvedDate] = true;
                        s_dict[this.WorkZip] = true;
                        s_dict[this.EmailTo] = true;
                        s_dict[this.Suffix] = true;
                        s_dict[this.LastNamePhonetic] = true;
                        s_dict[this.Category] = true;
                        s_dict[this.V3Comments] = true;
                        s_dict[this.Mileage] = true;
                        s_dict[this.Deleted] = true;
                        s_dict[this.SortBehavior] = true;
                        s_dict[this.WorkFax] = true;
                        s_dict[this._Relation] = true;
                        s_dict[this.CellPhone] = true;
                        s_dict[this.WorkspaceLink] = true;
                        s_dict[this.ol_Department] = true;
                        s_dict[this.In] = true;
                        s_dict[this.EmailFrom] = true;
                        s_dict[this.Office] = true;
                        s_dict[this.CompanyNumber] = true;
                        s_dict[this.Facilities] = true;
                        s_dict[this.HolidayNightWork] = true;
                        s_dict[this.DiscussionTitleLookup] = true;
                        s_dict[this.FTPSite] = true;
                        s_dict[this.WorkCity] = true;
                        s_dict[this.XomlUrl] = true;
                        s_dict[this.ContentTypeId] = true;
                        s_dict[this.UniqueId] = true;
                        s_dict[this.StatusBar] = true;
                        s_dict[this.EmailCalendarUid] = true;
                        s_dict[this.Vacation] = true;
                        s_dict[this.FreeBusy] = true;
                        s_dict[this._Photo] = true;
                        s_dict[this.Comment] = true;
                        s_dict[this.Overbook] = true;
                        s_dict[this.NoCrawl] = true;
                        s_dict[this.HealthRuleScope] = true;
                        s_dict[this.TimeZone] = true;
                        s_dict[this.ISDNNumber] = true;
                        s_dict[this.RecurrenceData] = true;
                        s_dict[this.EMail] = true;
                        s_dict[this._IsCurrentVersion] = true;
                        s_dict[this.File_x0020_Size] = true;
                        s_dict[this.WorkCountry] = true;
                        s_dict[this.NightWork] = true;
                        s_dict[this.AssociatedListId] = true;
                        s_dict[this.owshiddenversion] = true;
                        s_dict[this.AdminTaskOrder] = true;
                        s_dict[this.IsAnswered] = true;
                        s_dict[this.LinkFilenameNoMenu] = true;
                        s_dict[this.DueDate] = true;
                        s_dict[this.Start] = true;
                        s_dict[this.OtherAddressStateOrProvince] = true;
                        s_dict[this.ChildrensNames] = true;
                        s_dict[this.OtherAddressStreet] = true;
                        s_dict[this.ScopeId] = true;
                        s_dict[this.IconOverlay] = true;
                        s_dict[this.Threading] = true;
                        s_dict[this._DCDateCreated] = true;
                        s_dict[this.JobTitle] = true;
                        s_dict[this.TaskStatus] = true;
                        s_dict[this.Outcome] = true;
                        s_dict[this.AssistantsName] = true;
                        s_dict[this.MessageBody] = true;
                        s_dict[this.Initials] = true;
                        s_dict[this.IsSiteAdmin] = true;
                        s_dict[this.PermMask] = true;
                        s_dict[this.RestrictContentTypeId] = true;
                        s_dict[this.Data] = true;
                        s_dict[this.BodyAndMore] = true;
                        s_dict[this._Level] = true;
                        s_dict[this.ExtendedProperties] = true;
                        s_dict[this.IsQuestion] = true;
                        s_dict[this.EmailHeaders] = true;
                        s_dict[this.UIVersion] = true;
                        s_dict[this._Version] = true;
                        s_dict[this.WorkflowAssociation] = true;
                        s_dict[this._Contributor] = true;
                        s_dict[this.CompanyPhonetic] = true;
                        s_dict[this.ResolvedBy] = true;
                        s_dict[this.DecisionStatus] = true;
                        s_dict[this.Item] = true;
                        s_dict[this.ServerUrl] = true;
                        s_dict[this.AssistantNumber] = true;
                        s_dict[this._UIVersion] = true;
                        s_dict[this.EventCanceled] = true;
                        s_dict[this.UID] = true;
                        s_dict[this.ReplyNoGif] = true;
                        s_dict[this.IsFeatured] = true;
                        s_dict[this.BaseName] = true;
                        s_dict[this.EmailSender] = true;
                        s_dict[this.Event] = true;
                        s_dict[this.ParticipantsPicker] = true;
                        s_dict[this.IndentLevel] = true;
                        s_dict[this.ActualWork] = true;
                        s_dict[this.V4CallTo] = true;
                        s_dict[this.Occurred] = true;
                        s_dict[this.EmailCc] = true;
                        s_dict[this.ToggleQuotedText] = true;
                        s_dict[this.LinkDiscussionTitle] = true;
                        s_dict[this.Title] = true;
                        s_dict[this.CarNumber] = true;
                        s_dict[this.UserField2] = true;
                        s_dict[this.fRecurrence] = true;
                        s_dict[this.IssueStatus] = true;
                        s_dict[this.ShowRepairView] = true;
                        s_dict[this.XSLStyleCategory] = true;
                        s_dict[this.BestAnswerId] = true;
                        s_dict[this.Subject] = true;
                        s_dict[this.Email3] = true;
                        s_dict[this.Anniversary] = true;
                        s_dict[this.Order] = true;
                        s_dict[this.HealthRuleService] = true;
                        s_dict[this.TrimmedBody] = true;
                        s_dict[this._Category] = true;
                        s_dict[this.FileRef] = true;
                        s_dict[this.LimitedBody] = true;
                        s_dict[this.ManagersName] = true;
                        s_dict[this._Status] = true;
                        s_dict[this.MasterSeriesItemID] = true;
                        s_dict[this.WorkflowListId] = true;
                        s_dict[this.Picture] = true;
                        s_dict[this.FormURN] = true;
                        s_dict[this.TTYTDDNumber] = true;
                        s_dict[this.OtherNumber] = true;
                        s_dict[this.Attachments] = true;
                        s_dict[this.URLNoMenu] = true;
                        s_dict[this.HolidayDate] = true;
                        s_dict[this.BodyWasExpanded] = true;
                        s_dict[this.PostCategory] = true;
                        s_dict[this._ResourceType] = true;
                        s_dict[this.Duration] = true;
                        s_dict[this.StartDate] = true;
                        s_dict[this.xd_Signature] = true;
                        s_dict[this.MobileContent] = true;
                        s_dict[this.Preview] = true;
                        s_dict[this.HealthRuleType] = true;
                        s_dict[this.ListType] = true;
                        s_dict[this.IMEPos] = true;
                        s_dict[this.Checkmark] = true;
                        s_dict[this.AppEditor] = true;
                        s_dict[this.DocIcon] = true;
                        s_dict[this.ParentVersionString] = true;
                        s_dict[this.HomeAddressPostalCode] = true;
                        s_dict[this.PersonImage] = true;
                        s_dict[this.UserField1] = true;
                        s_dict[this.PreviouslyAssignedTo] = true;
                        s_dict[this._DCDateModified] = true;
                        s_dict[this._Identifier] = true;
                        s_dict[this.GUID] = true;
                        s_dict[this.ProgId] = true;
                        s_dict[this.Language] = true;
                        s_dict[this.UserName] = true;
                        s_dict[this.OffsiteParticipantReason] = true;
                        s_dict[this.WorkAddress] = true;
                        s_dict[this._ModerationComments] = true;
                        s_dict[this.EventType] = true;
                        s_dict[this.Created] = true;
                        s_dict[this.FolderChildCount] = true;
                        s_dict[this.CorrectBodyToShow] = true;
                        s_dict[this.GbwLocation] = true;
                        s_dict[this.InstanceID] = true;
                        s_dict[this.HomePhone] = true;
                        s_dict[this.WhatsNew] = true;
                        s_dict[this.RelatedLinks] = true;
                        s_dict[this.Birthday] = true;
                        s_dict[this.DiscussionLastUpdated] = true;
                        s_dict[this.DisplayTemplateJSTemplateHidden] = true;
                        s_dict[this.WikiField] = true;
                        s_dict[this.Edit] = true;
                        s_dict[this.XSLStyleWPType] = true;
                        s_dict[this.FSObjType] = true;
                        s_dict[this._EndDate] = true;
                        s_dict[this.ShortestThreadIndex] = true;
                        s_dict[this.ol_EventAddress] = true;
                        s_dict[this.TelexNumber] = true;
                        s_dict[this.DisplayTemplateJSTemplateType] = true;
                        s_dict[this.HealthRuleCheckEnabled] = true;
                        s_dict[this.RequiredField] = true;
                        s_dict[this.IMAddress] = true;
                        s_dict[this.xd_ProgID] = true;
                        s_dict[this.TotalWork] = true;
                        s_dict[this.FileType] = true;
                        s_dict[this.Nickname] = true;
                        s_dict[this.PrimaryNumber] = true;
                        s_dict[this.ImageCreateDate] = true;
                        s_dict[this.NumberOfVacation] = true;
                        s_dict[this.SystemTask] = true;
                        s_dict[this.IsRootPost] = true;
                        s_dict[this.Late] = true;
                        s_dict[this.UserInfoHidden] = true;
                        s_dict[this.Business2Number] = true;
                        s_dict[this.Created_x0020_By] = true;
                        s_dict[this.FormData] = true;
                        s_dict[this.LinkTitle] = true;
                        s_dict[this.IMEDisplay] = true;
                        s_dict[this.Notes] = true;
                        s_dict[this._SourceUrl] = true;
                        s_dict[this.FileSizeDisplay] = true;
                        s_dict[this.HealthReportSeverityIcon] = true;
                        s_dict[this.ThumbnailOnForm] = true;
                        s_dict[this.WorkPhone] = true;
                        s_dict[this.TaskGroup] = true;
                        s_dict[this.HealthReportRemedy] = true;
                        s_dict[this.EmailCalendarDateStamp] = true;
                        s_dict[this.MoreLink] = true;
                        s_dict[this._Source] = true;
                        s_dict[this.MetaInfo] = true;
                        s_dict[this.DateCompleted] = true;
                        s_dict[this.Completed] = true;
                        s_dict[this.ItemChildCount] = true;
                        s_dict[this.SelectFilename] = true;
                        s_dict[this.SurveyTitle] = true;
                        s_dict[this.DayOfWeek] = true;
                        s_dict[this.EncodedAbsUrl] = true;
                        s_dict[this.DLC_Description] = true;
                        s_dict[this.QuotedTextWasExpanded] = true;
                        s_dict[this.IsActive] = true;
                        s_dict[this.MUILanguages] = true;
                        s_dict[this.HomeFaxNumber] = true;
                        s_dict[this.Categories] = true;
                        s_dict[this.ImageSize] = true;
                        s_dict[this.HealthReportServices] = true;
                        s_dict[this.HealthReportServers] = true;
                        s_dict[this.Content] = true;
                        s_dict[this.Predecessors] = true;
                        s_dict[this.PreviewExists] = true;
                        s_dict[this.LessLink] = true;
                        s_dict[this.XSLStyleRequiredFields] = true;
                        s_dict[this.IMEUrl] = true;
                        var id = "{" + fid + "}";
                        var ishere = s_dict[id];
                        return ishere;
                    };
                    BuiltInFieldId.ContentTypeId = "{03e45e84-1992-4d42-9116-26f756012634}";
                    BuiltInFieldId.ContentType = "{c042a256-787d-4a6f-8a8a-cf6ab767f12d}";
                    BuiltInFieldId.ID = "{1d22ea11-1e32-424e-89ab-9fedbadb6ce1}";
                    BuiltInFieldId.Modified = "{28cf69c5-fa48-462a-b5cd-27b6f9d2bd5f}";
                    BuiltInFieldId.Created = "{8c06beca-0777-48f7-91c7-6da68bc07b69}";
                    BuiltInFieldId.Author = "{1df5e554-ec7e-46a6-901d-d85a3881cb18}";
                    BuiltInFieldId.Editor = "{d31655d1-1d5b-4511-95a1-7a09e9b75bf2}";
                    BuiltInFieldId.owshiddenversion = "{d4e44a66-ee3a-4d02-88c9-4ec5ff3f4cd5}";
                    BuiltInFieldId.Subject = "{76a81629-44d4-4ce1-8d4d-6d7ebcd885fc}";
                    BuiltInFieldId._Author = "{246d0907-637c-46b7-9aa0-0bb914daa832}";
                    BuiltInFieldId._Category = "{0fc9cace-c5c2-465d-ae88-b67f2964ca93}";
                    BuiltInFieldId._Status = "{1dab9b48-2d1a-47b3-878c-8e84f0d211ba}";
                    BuiltInFieldId.FileRef = "{94f89715-e097-4e8b-ba79-ea02aa8b7adb}";
                    BuiltInFieldId.FileDirRef = "{56605df6-8fa1-47e4-a04c-5b384d59609f}";
                    BuiltInFieldId.Last_x0020_Modified = "{173f76c8-aebd-446a-9bc9-769a2bd2c18f}";
                    BuiltInFieldId.Created_x0020_Date = "{998b5cff-4a35-47a7-92f3-3914aa6aa4a2}";
                    BuiltInFieldId.File_x0020_Size = "{8fca95c0-9b7d-456f-8dae-b41ee2728b85}";
                    BuiltInFieldId.FSObjType = "{30bb605f-5bae-48fe-b4e3-1f81d9772af9}";
                    BuiltInFieldId.PermMask = "{ba3c27ee-4791-4867-8821-ff99000bac98}";
                    BuiltInFieldId.CheckoutUser = "{3881510a-4e4a-4ee8-b102-8ee8e2d0dd4b}";
                    BuiltInFieldId.VirusStatus = "{4a389cb9-54dd-4287-a71a-90ff362028bc}";
                    BuiltInFieldId.InstanceID = "{50a54da4-1528-4e67-954a-e2d24f1e9efb}";
                    BuiltInFieldId._CheckinComment = "{58014f77-5463-437b-ab67-eec79532da67}";
                    BuiltInFieldId.MetaInfo = "{687c7f94-686a-42d3-9b67-2782eac4b4f8}";
                    BuiltInFieldId._Level = "{43bdd51b-3c5b-4e78-90a8-fb2087f71e70}";
                    BuiltInFieldId._IsCurrentVersion = "{c101c3e7-122d-4d4d-bc34-58e94a38c816}";
                    BuiltInFieldId._HasCopyDestinations = "{26d0756c-986a-48a7-af35-bf18ab85ff4a}";
                    BuiltInFieldId._CopySource = "{6b4e226d-3d88-4a36-808d-a129bf52bccf}";
                    BuiltInFieldId._ModerationStatus = "{fdc3b2ed-5bf2-4835-a4bc-b885f3396a61}";
                    BuiltInFieldId._ModerationComments = "{34ad21eb-75bd-4544-8c73-0e08330291fe}";
                    BuiltInFieldId.Title = "{fa564e0f-0c70-4ab9-b863-0177e6ddd247}";
                    BuiltInFieldId.WorkflowVersion = "{f1e020bc-ba26-443f-bf2f-b68715017bbc}";
                    BuiltInFieldId.Attachments = "{67df98f4-9dec-48ff-a553-29bece9c5bf4}";
                    BuiltInFieldId.Edit = "{503f1caa-358e-4918-9094-4a2cdc4bc034}";
                    BuiltInFieldId.LinkTitleNoMenu = "{bc91a437-52e7-49e1-8c4e-4698904b2b6d}";
                    BuiltInFieldId.LinkTitle = "{82642ec8-ef9b-478f-acf9-31f7d45fbc31}";
                    BuiltInFieldId.SelectTitle = "{b1f7969b-ea65-42e1-8b54-b588292635f2}";
                    BuiltInFieldId.Order = "{ca4addac-796f-4b23-b093-d2a3f65c0774}";
                    BuiltInFieldId.GUID = "{ae069f25-3ac2-4256-b9c3-15dbc15da0e0}";
                    BuiltInFieldId.WorkflowInstanceID = "{de8beacf-5505-47cd-80a6-aa44e7ffe2f4}";
                    BuiltInFieldId.UniqueId = "{4b7403de-8d94-43e8-9f0f-137a3e298126}";
                    BuiltInFieldId.ProgId = "{c5c4b81c-f1d9-4b43-a6a2-090df32ebb68}";
                    BuiltInFieldId.FileLeafRef = "{8553196d-ec8d-4564-9861-3dbe931050c8}";
                    BuiltInFieldId.ScopeId = "{dddd2420-b270-4735-93b5-92b713d0944d}";
                    BuiltInFieldId.EmailSender = "{4ce600fb-a927-4911-bfc1-11076b76b522}";
                    BuiltInFieldId.EmailTo = "{caa2cb1e-a124-4068-9496-14feef1a901f}";
                    BuiltInFieldId.EmailCc = "{a6af6df4-feb5-4dbf-bef6-d81230d4a071}";
                    BuiltInFieldId.EmailFrom = "{e7cb6f60-f676-4b1d-89a3-975b6bc78cad}";
                    BuiltInFieldId.EmailSubject = "{072e9bb6-a643-44ce-b6fb-8b574a792556}";
                    BuiltInFieldId.EmailCalendarUid = "{f4e00567-8a9d-451b-82d4-a4447f9bd9a5}";
                    BuiltInFieldId.EmailCalendarSequence = "{7a0cb12b-c70c-4f99-99f1-a232783a87d7}";
                    BuiltInFieldId.EmailCalendarDateStamp = "{32f182ba-284e-4a87-93c3-936a6585af39}";
                    BuiltInFieldId._UIVersion = "{7841bf41-43d0-4434-9f50-a673baef7631}";
                    BuiltInFieldId._UIVersionString = "{dce8262a-3ae9-45aa-aab4-83bd75fb738a}";
                    BuiltInFieldId.Modified_x0020_By = "{822c78e3-1ea9-4943-b449-57863ad33ca9}";
                    BuiltInFieldId.Created_x0020_By = "{4dd7e525-8d6b-4cb4-9d3e-44ee25f973eb}";
                    BuiltInFieldId.File_x0020_Type = "{39360f11-34cf-4356-9945-25c44e68dade}";
                    BuiltInFieldId.HTML_x0020_File_x0020_Type = "{0c5e0085-eb30-494b-9cdd-ece1d3c649a2}";
                    BuiltInFieldId._SourceUrl = "{c63a459d-54ba-4ab7-933a-dcf1c6fadec2}";
                    BuiltInFieldId._SharedFileIndex = "{034998e9-bf1c-4288-bbbd-00eacfc64410}";
                    BuiltInFieldId.LinkFilenameNoMenu = "{9d30f126-ba48-446b-b8f9-83745f322ebe}";
                    BuiltInFieldId._EditMenuTableStart = "{3c6303be-e21f-4366-80d7-d6d0a3b22c7a}";
                    BuiltInFieldId._EditMenuTableEnd = "{2ea78cef-1bf9-4019-960a-02c41636cb47}";
                    BuiltInFieldId.LinkFilename = "{5cc6dc79-3710-4374-b433-61cb4a686c12}";
                    BuiltInFieldId.SelectFilename = "{5f47e085-2150-41dc-b661-442f3027f552}";
                    BuiltInFieldId.DocIcon = "{081c6e4c-5c14-4f20-b23e-1a71ceb6a67c}";
                    BuiltInFieldId.ServerUrl = "{105f76ce-724a-4bba-aece-f81f2fce58f5}";
                    BuiltInFieldId.EncodedAbsUrl = "{7177cfc7-f399-4d4d-905d-37dd51bc90bf}";
                    BuiltInFieldId.BaseName = "{7615464b-559e-4302-b8e2-8f440b913101}";
                    BuiltInFieldId.FileSizeDisplay = "{78a07ba4-bda8-4357-9e0f-580d64487583}";
                    BuiltInFieldId.Body = "{7662cd2c-f069-4dba-9e35-082cf976e170}";
                    BuiltInFieldId.Expires = "{6a09e75b-8d17-4698-94a8-371eda1af1ac}";
                    BuiltInFieldId.URL = "{c29e077d-f466-4d8e-8bbe-72b66c5f205c}";
                    BuiltInFieldId._Comments = "{52578fc3-1f01-4f4d-b016-94ccbcf428cf}";
                    BuiltInFieldId._EndDate = "{8a121252-85a9-443d-8217-a1b57020fadf}";
                    BuiltInFieldId.EndDate = "{2684f9f2-54be-429f-ba06-76754fc056bf}";
                    BuiltInFieldId.URLwMenu = "{2a9ab6d3-268a-4c1c-9897-e5f018f87e64}";
                    BuiltInFieldId.URLNoMenu = "{aeaf07ee-d2fb-448b-a7a3-cf7e062d6c2a}";
                    BuiltInFieldId.LastNamePhonetic = "{fdc8216d-dabf-441d-8ac0-f6c626fbdc24}";
                    BuiltInFieldId.FirstName = "{4a722dd4-d406-4356-93f9-2550b8f50dd0}";
                    BuiltInFieldId.FirstNamePhonetic = "{ea8f7ca9-2a0e-4a89-b8bf-c51a6af62c73}";
                    BuiltInFieldId.FullName = "{475c2610-c157-4b91-9e2d-6855031b3538}";
                    BuiltInFieldId.CompanyPhonetic = "{034aae88-6e9a-4e41-bc8a-09b6c15fcdf4}";
                    BuiltInFieldId.Company = "{038d1503-4629-40f6-adaf-b47d1ab2d4fe}";
                    BuiltInFieldId.JobTitle = "{c4e0f350-52cc-4ede-904c-dd71a3d11f7d}";
                    BuiltInFieldId.WorkPhone = "{fd630629-c165-4513-b43c-fdb16b86a14d}";
                    BuiltInFieldId.HomePhone = "{2ab923eb-9880-4b47-9965-ebf93ae15487}";
                    BuiltInFieldId.CellPhone = "{2a464df1-44c1-4851-949d-fcd270f0ccf2}";
                    BuiltInFieldId.WorkFax = "{9d1cacc8-f452-4bc1-a751-050595ad96e1}";
                    BuiltInFieldId.WorkAddress = "{fc2e188e-ba91-48c9-9dd3-16431afddd50}";
                    BuiltInFieldId._Photo = "{1020c8a0-837a-4f1b-baa1-e35aff6da169}";
                    BuiltInFieldId.WorkCity = "{6ca7bd7f-b490-402e-af1b-2813cf087b1e}";
                    BuiltInFieldId.WorkState = "{ceac61d3-dda9-468b-b276-f4a6bb93f14f}";
                    BuiltInFieldId.WorkZip = "{9a631556-3dac-49db-8d2f-fb033b0fdc24}";
                    BuiltInFieldId.WorkCountry = "{3f3a5c85-9d5a-4663-b925-8b68a678ea3a}";
                    BuiltInFieldId.WebPage = "{a71affd2-dcc7-4529-81bc-2fe593154a5f}";
                    BuiltInFieldId.Priority = "{a8eb573e-9e11-481a-a8c9-1104a54b2fbd}";
                    BuiltInFieldId.TaskStatus = "{c15b34c3-ce7d-490a-b133-3f4de8801b76}";
                    BuiltInFieldId.PercentComplete = "{d2311440-1ed6-46ea-b46d-daa643dc3886}";
                    BuiltInFieldId.AssignedTo = "{53101f38-dd2e-458c-b245-0c236cc13d1a}";
                    BuiltInFieldId.TaskGroup = "{50d8f08c-8e99-4948-97bf-2be41fa34a0d}";
                    BuiltInFieldId.StartDate = "{64cd368d-2f95-4bfc-a1f9-8d4324ecb007}";
                    BuiltInFieldId.TaskDueDate = "{cd21b4c2-6841-4f9e-a23a-738a65f99889}";
                    BuiltInFieldId.WorkflowLink = "{58ddda52-c2a3-4650-9178-3bbc1f6e36da}";
                    BuiltInFieldId.OffsiteParticipant = "{16b6952f-3ce6-45e0-8f4e-42dac6e12441}";
                    BuiltInFieldId.OffsiteParticipantReason = "{4a799ba5-f449-4796-b43e-aa5186c3c414}";
                    BuiltInFieldId.WorkflowOutcome = "{18e1c6fa-ae37-4102-890a-cfb0974ef494}";
                    BuiltInFieldId.WorkflowName = "{e506d6ca-c2da-4164-b858-306f1c41c9ec}";
                    BuiltInFieldId.TaskType = "{8d96aa48-9dff-46cf-8538-84c747ffa877}";
                    BuiltInFieldId.FormURN = "{17ca3a22-fdfe-46eb-99b5-9646baed3f16}";
                    BuiltInFieldId.FormData = "{78eae64a-f5f2-49af-b416-3247b76f46a1}";
                    BuiltInFieldId.EmailBody = "{8cbb9252-1035-4156-9c35-f54e9056c65a}";
                    BuiltInFieldId.HasCustomEmailBody = "{47f68c3b-8930-406f-bde2-4a8c669ee87c}";
                    BuiltInFieldId.SendEmailNotification = "{cb2413f2-7de9-4afc-8587-1ca3f563f624}";
                    BuiltInFieldId.PendingModTime = "{4d2444c2-0e97-476c-a2a3-e9e4a9c73009}";
                    BuiltInFieldId.Completed = "{35363960-d998-4aad-b7e8-058dfe2c669e}";
                    BuiltInFieldId.WorkflowListId = "{1bfee788-69b7-4765-b109-d4d9c31d1ac1}";
                    BuiltInFieldId.WorkflowItemId = "{8e234c69-02b0-42d9-8046-d5f49bf0174f}";
                    BuiltInFieldId.ExtendedProperties = "{1c5518e2-1e99-49fe-bfc6-1a8de3ba16e2}";
                    BuiltInFieldId.AdminTaskAction = "{7b016ee5-70aa-4abb-8aa3-01795b4efe6f}";
                    BuiltInFieldId.AdminTaskDescription = "{93490584-b6a8-4996-aa00-ead5f59aae0d}";
                    BuiltInFieldId.AdminTaskOrder = "{cf935cc2-a00c-4ad3-bca1-0865ab15afc1}";
                    BuiltInFieldId.Service = "{48b4a73e-8853-44ac-83a8-3a4bd59ce9ec}";
                    BuiltInFieldId.SystemTask = "{af0a3d4b-3ceb-449e-9bf4-51103f2032e3}";
                    BuiltInFieldId.Location = "{288f5f32-8462-4175-8f09-dd7ba29359a9}";
                    BuiltInFieldId.fRecurrence = "{f2e63656-135e-4f1c-8fc2-ccbe74071901}";
                    BuiltInFieldId.WorkspaceLink = "{08fc65f9-48eb-4e99-bd61-5946c439e691}";
                    BuiltInFieldId.EventType = "{5d1d4e76-091a-4e03-ae83-6a59847731c0}";
                    BuiltInFieldId.UID = "{63055d04-01b5-48f3-9e1e-e564e7c6b23b}";
                    BuiltInFieldId.RecurrenceID = "{dfcc8fff-7c4c-45d6-94ed-14ce0719efef}";
                    BuiltInFieldId.EventCanceled = "{b8bbe503-bb22-4237-8d9e-0587756a2176}";
                    BuiltInFieldId.Duration = "{4d54445d-1c84-4a6d-b8db-a51ded4e1acc}";
                    BuiltInFieldId.RecurrenceData = "{d12572d0-0a1e-4438-89b5-4d0430be7603}";
                    BuiltInFieldId.TimeZone = "{6cc1c612-748a-48d8-88f2-944f477f301b}";
                    BuiltInFieldId.XMLTZone = "{c4b72ed6-45aa-4422-bff1-2b6750d30819}";
                    BuiltInFieldId.MasterSeriesItemID = "{9b2bed84-7769-40e3-9b1d-7954a4053834}";
                    BuiltInFieldId.Workspace = "{881eac4a-55a5-48b6-a28e-8329d7486120}";
                    BuiltInFieldId.IssueStatus = "{3f277a5c-c7ae-4bbe-9d44-0456fb548f94}";
                    BuiltInFieldId.Comment = "{6df9bd52-550e-4a30-bc31-a4366832a87f}";
                    BuiltInFieldId.Comments = "{9da97a8a-1da5-4a77-98d3-4bc10456e700}";
                    BuiltInFieldId.Category = "{6df9bd52-550e-4a30-bc31-a4366832a87d}";
                    BuiltInFieldId.RelatedIssues = "{875fab27-6e95-463b-a4a6-82544f1027fb}";
                    BuiltInFieldId.LinkIssueIDNoMenu = "{03f89857-27c9-4b58-aaab-620647deda9b}";
                    BuiltInFieldId.V3Comments = "{6df9bd52-550e-4a30-bc31-a4366832a87e}";
                    BuiltInFieldId.Name = "{bfc6f32c-668c-43c4-a903-847cca2f9b3c}";
                    BuiltInFieldId.EMail = "{fce16b4c-fe53-4793-aaab-b4892e736d15}";
                    BuiltInFieldId.Notes = "{e241f186-9b94-415c-9f66-255ce7f86235}";
                    BuiltInFieldId.IsSiteAdmin = "{9ba260b2-85a1-4a32-ad7a-63eaceffe6b4}";
                    BuiltInFieldId.Deleted = "{4ed6dfdf-86a8-4894-bd1b-4fa28042be53}";
                    BuiltInFieldId.Picture = "{d9339777-b964-489a-bf09-2ac3c3fe5f0d}";
                    BuiltInFieldId.Department = "{05fdf852-4b64-4096-9b2b-d2a62a86bc59}";
                    BuiltInFieldId.SipAddress = "{829c275d-8744-4d9b-a42f-53f53eb60559}";
                    BuiltInFieldId.IsActive = "{af5036db-36f4-46c8-bde7-a677bd0ef280}";
                    BuiltInFieldId.TrimmedBody = "{6d0f8993-5050-41f3-be6c-18902d282357}";
                    BuiltInFieldId.DiscussionLastUpdated = "{59956c56-30dd-4cb1-bf12-ef693b42679c}";
                    BuiltInFieldId.MessageId = "{2ef29342-2f5f-4052-90d3-8192e0705e51}";
                    BuiltInFieldId.ThreadTopic = "{769b99d9-d361-4948-b687-f01332391629}";
                    BuiltInFieldId.ThreadIndex = "{cef73bf1-edf6-4dd9-9098-a07d83984700}";
                    BuiltInFieldId.EmailReferences = "{124527a9-fc10-48ff-8d44-960a7db405f8}";
                    BuiltInFieldId.RelevantMessages = "{9161f6cb-a8e6-47b8-9d24-89415de691f7}";
                    BuiltInFieldId.ParentFolderId = "{a9ec25bf-5a22-4658-bd19-484e52efbe1a}";
                    BuiltInFieldId.ShortestThreadIndex = "{4753e73b-5b5d-4bbc-8e09-c9683b0d40a7}";
                    BuiltInFieldId.ShortestThreadIndexId = "{2bec4782-695f-406d-9e50-f1d39a2b8eb6}";
                    BuiltInFieldId.ShortestThreadIndexIdLookup = "{8ffccefe-998b-4896-a6df-32d566f69141}";
                    BuiltInFieldId.DiscussionTitleLookup = "{f0218b98-d0d6-4fc1-b15b-aabeb89f32a9}";
                    BuiltInFieldId.DiscussionTitle = "{c5abfdc7-3435-4183-9207-3d1146895cf8}";
                    BuiltInFieldId.ParentItemEditor = "{ff90fecb-7f46-44f5-9698-db44a81b2a8b}";
                    BuiltInFieldId.ParentItemID = "{7d014138-1886-41f0-834f-ba9f4e72f33b}";
                    BuiltInFieldId.LastReplyBy = "{7f15088c-1448-41c7-a125-18a3a90ce543}";
                    BuiltInFieldId.IsQuestion = "{7aead996-f9f9-4682-9e0e-f5634ab352c8}";
                    BuiltInFieldId.BestAnswerId = "{a8b93fba-7396-443d-9884-ee332caa4560}";
                    BuiltInFieldId.IsAnswered = "{32b1ca82-a25b-48d1-b78d-3a956ba07c41}";
                    BuiltInFieldId.LinkDiscussionTitleNoMenu = "{3ac9353f-613f-42bd-98e1-530e9fd1cbf6}";
                    BuiltInFieldId.LinkDiscussionTitle = "{46045bc4-283a-4826-b3dd-7a78d790b266}";
                    BuiltInFieldId.LinkDiscussionTitle2 = "{b4e31c47-f962-4f9f-9132-eb555a1a026c}";
                    BuiltInFieldId.ReplyNoGif = "{87cda0e2-fc57-4eec-a696-b0de2f61f361}";
                    BuiltInFieldId.ThreadingControls = "{c55a4674-640b-4bae-8738-ce0439e6f6d4}";
                    BuiltInFieldId.IndentLevel = "{68227570-72dd-4816-b6b6-4b81ff99a393}";
                    BuiltInFieldId.Indentation = "{26c4f53e-733a-4202-814b-377492b6c841}";
                    BuiltInFieldId.StatusBar = "{f90bce56-87dc-4d73-bfcb-03fcaf670500}";
                    BuiltInFieldId.BodyAndMore = "{c7e9537e-bde4-4923-a100-adbd9e0a0a0d}";
                    BuiltInFieldId.MessageBody = "{fbba993f-afee-4e00-b9be-36bc660dcdd1}";
                    BuiltInFieldId.BodyWasExpanded = "{af82aa75-3039-4573-84a8-73ffdfd22733}";
                    BuiltInFieldId.QuotedTextWasExpanded = "{e393d344-2e8c-425b-a8c3-89ac3144c9a2}";
                    BuiltInFieldId.CorrectBodyToShow = "{b0204f69-2253-43d2-99ad-c0df00031b66}";
                    BuiltInFieldId.FullBody = "{9c4be348-663a-4172-a38a-9714b2634c17}";
                    BuiltInFieldId.LimitedBody = "{61b97279-cbc0-4aa9-a362-f1ff249c1706}";
                    BuiltInFieldId.MoreLink = "{fb6c2494-1b14-49b0-a7ca-0506d6e85a62}";
                    BuiltInFieldId.LessLink = "{076193bd-865b-4de7-9633-1f12069a6fff}";
                    BuiltInFieldId.ToggleQuotedText = "{e451420d-4e62-43e3-af83-010d36e353a2}";
                    BuiltInFieldId.Threading = "{58ca6516-51cd-41fb-a908-dd2a4aeea8bc}";
                    BuiltInFieldId.PersonImage = "{adfe65ee-74bb-4771-bec5-d691d9a6a14e}";
                    BuiltInFieldId.PersonViewMinimal = "{b4ab471e-0262-462a-8b3f-c1dfc9e2d5fd}";
                    BuiltInFieldId.IsRootPost = "{bd2216c1-a2f3-48c0-b21c-dc297d0cc658}";
                    BuiltInFieldId.Combine = "{e52012a0-51eb-4c0c-8dfb-9b8a0ebedcb6}";
                    BuiltInFieldId.RepairDocument = "{5d36727b-bcb2-47d2-a231-1f0bc63b7439}";
                    BuiltInFieldId.ShowRepairView = "{11851948-b05e-41be-9d9f-bc3bf55d1de3}";
                    BuiltInFieldId.ShowCombineView = "{086f2b30-460c-4251-b75a-da88a5b205c1}";
                    BuiltInFieldId.TemplateUrl = "{4b1bf6c6-4f39-45ac-acd5-16fe7a214e5e}";
                    BuiltInFieldId.xd_ProgID = "{cd1ecb9f-dd4e-4f29-ab9e-e9ff40048d64}";
                    BuiltInFieldId.xd_Signature = "{fbf29b2d-cae5-49aa-8e0a-29955b540122}";
                    BuiltInFieldId.WorkflowInstance = "{de21c770-a12b-4f88-af4b-aeebd897c8c2}";
                    BuiltInFieldId.WorkflowAssociation = "{8d426880-8d96-459b-ae48-e8b3836d8b9d}";
                    BuiltInFieldId.WorkflowTemplate = "{bfb1589e-2016-4b98-ae62-e91979c3224f}";
                    BuiltInFieldId.List = "{f44e428b-61c8-4100-a911-a3a635f43bb5}";
                    BuiltInFieldId.Item = "{92b8e9d0-a11b-418f-bf1c-c44aaa73075d}";
                    BuiltInFieldId.User = "{5928ff1f-daa1-406c-b4a9-190485a448cb}";
                    BuiltInFieldId.Occurred = "{5602dc33-a60a-4dec-bd23-d18dfcef861d}";
                    BuiltInFieldId.Event = "{20a1a5b1-fddf-4420-ac68-9701490e09af}";
                    BuiltInFieldId.Group = "{c86a2f7f-7680-4a0b-8907-39c4f4855a35}";
                    BuiltInFieldId.Outcome = "{dcde7b1f-918b-4ed5-819f-9798f8abac37}";
                    BuiltInFieldId.DLC_Duration = "{80289bac-fd36-4848-b67a-bc8b5b621ec2}";
                    BuiltInFieldId.DLC_Description = "{2fd53156-ff9d-4cc3-b0ac-fe8a7bc82283}";
                    BuiltInFieldId.Data = "{38269294-165e-448a-a6b9-f0e09688f3f9}";
                    BuiltInFieldId.Purpose = "{8ee23f39-e2d1-4b46-8945-42386b24829d}";
                    BuiltInFieldId.ConnectionType = "{939dfb93-3107-44c6-a98f-dd88dca3f8cf}";
                    BuiltInFieldId.FileType = "{c53a03f3-f930-4ef2-b166-e0f2210c13c0}";
                    BuiltInFieldId.ImageSize = "{922551b8-c7e0-46a6-b7e3-3cf02917f68a}";
                    BuiltInFieldId.ImageWidth = "{7e68a0f9-af76-404c-9613-6f82bc6dc28c}";
                    BuiltInFieldId.ImageHeight = "{1944c034-d61b-42af-aa84-647f2e74ca70}";
                    BuiltInFieldId.ImageCreateDate = "{a5d2f824-bc53-422e-87fd-765939d863a5}";
                    BuiltInFieldId.EncodedAbsThumbnailUrl = "{b9e6f3ae-5632-4b13-b636-9d1a2bd67120}";
                    BuiltInFieldId.EncodedAbsWebImgUrl = "{a1ca0063-779f-49f9-999c-a4a2e3645b07}";
                    BuiltInFieldId.SelectedFlag = "{7ebf72ca-a307-4c18-9e5b-9d89e1dae74f}";
                    BuiltInFieldId.NameOrTitle = "{76d1cc87-56de-432c-8a2a-16e5ba5331b3}";
                    BuiltInFieldId.RequiredField = "{de1baa4b-2117-473b-aa0c-4d824034142d}";
                    BuiltInFieldId.Keywords = "{b66e9b50-a28e-469b-b1a0-af0e45486874}";
                    BuiltInFieldId.Thumbnail = "{ac7bb138-02dc-40eb-b07a-84c15575b6e9}";
                    BuiltInFieldId.Preview = "{bd716b26-546d-43f2-b229-62699581fa9f}";
                    BuiltInFieldId.DecisionStatus = "{ac3a1092-34ad-42b2-8d47-a79d01d9f516}";
                    BuiltInFieldId.AttendeeStatus = "{3329f39d-70ed-4858-b8c8-c5237634bf08}";
                    BuiltInFieldId.fAllDayEvent = "{7d95d1f4-f5fd-4a70-90cd-b35abc9b5bc8}";
                    BuiltInFieldId.Language = "{d81529e8-384c-4ca6-9c43-c86a256e6a44}";
                    BuiltInFieldId.SurveyTitle = "{e6f528fb-2e22-483d-9c80-f2536acdc6de}";
                    BuiltInFieldId.WikiField = "{c33527b4-d920-4587-b791-45024d00068a}";
                    BuiltInFieldId.PublishedDate = "{b1b53d80-23d6-e31b-b235-3a286b9f10ea}";
                    BuiltInFieldId.PostCategory = "{38bea83b-350a-1a6e-f34a-93a6af31338b}";
                    BuiltInFieldId.BaseAssociationGuid = "{e9359d15-261b-48f6-a302-01419a68d4de}";
                    BuiltInFieldId.XomlUrl = "{566da236-762b-4a76-ad1f-b08b3c703fce}";
                    BuiltInFieldId.RulesUrl = "{ad97fbac-70af-4860-a078-5ee704946f93}";
                    BuiltInFieldId.Categories = "{9ebcd900-9d05-46c8-8f4d-e46e87328844}";
                    BuiltInFieldId.ol_EventAddress = "{493896da-0a4f-46ec-a68e-9cfd1a5fc19b}";
                    BuiltInFieldId.DateCompleted = "{24bfa3c2-e6a0-4651-80e9-3db44bf52147}";
                    BuiltInFieldId.TotalWork = "{f3c4a259-19a2-44b8-ab3d-e9145d07d538}";
                    BuiltInFieldId.ActualWork = "{b0b3407e-1c33-40ed-a37c-2430b7a5d081}";
                    BuiltInFieldId.TaskCompanies = "{3914f98e-6d99-4218-9ba3-af7370b9e7bc}";
                    BuiltInFieldId.Mileage = "{3126c2f1-063e-4892-828f-0696ec6e105f}";
                    BuiltInFieldId.BillingInformation = "{4f03f66b-fb1e-4ed2-ab8e-f6ed3fe14844}";
                    BuiltInFieldId.Role = "{eeaeaaf1-4110-465b-905e-df1073a7e0e6}";
                    BuiltInFieldId.MiddleName = "{418c8d29-6f2e-44c3-8955-2cd7ec3e2151}";
                    BuiltInFieldId.Suffix = "{d886eba3-d018-4103-a322-d5780127ef8a}";
                    BuiltInFieldId.AssistantNumber = "{f55de332-074e-4e71-a71a-b90abfad51ae}";
                    BuiltInFieldId.Business2Number = "{6547d03a-76d3-4d74-9d34-f51b837c0879}";
                    BuiltInFieldId.CallbackNumber = "{344e9657-b17f-4344-a834-ff7c056bcc5e}";
                    BuiltInFieldId.CarNumber = "{92a011a9-fd1b-42e0-b6fa-afcfee1928fa}";
                    BuiltInFieldId.CompanyNumber = "{27cb1283-bda2-4ae8-bcff-71725b674dbb}";
                    BuiltInFieldId.Home2Number = "{8c5a385d-2fff-42da-a4c5-f6a904f2e491}";
                    BuiltInFieldId.HomeFaxNumber = "{c189a857-e6b0-488f-83a0-f4ee0a3ad01e}";
                    BuiltInFieldId.ISDNNumber = "{a579062a-6c1d-4ad3-9d5e-035f9f2c1882}";
                    BuiltInFieldId.OtherNumber = "{96e02495-f428-48bc-9f13-06d98ba58c34}";
                    BuiltInFieldId.OtherFaxNumber = "{aad15eb6-d7fd-47b8-abd4-adc0fe33a6ba}";
                    BuiltInFieldId.PagerNumber = "{f79bf074-daf7-4c06-a314-15b287fdf4c9}";
                    BuiltInFieldId.PrimaryNumber = "{d69bcc0e-57c3-4f3b-bbc5-b090edf21f0f}";
                    BuiltInFieldId.RadioNumber = "{d1aede4f-1352-48d9-81e2-b10097c359c1}";
                    BuiltInFieldId.TelexNumber = "{e7be7f3c-c436-481d-8865-669e5146f53c}";
                    BuiltInFieldId.TTYTDDNumber = "{f54697f1-0357-4c5a-a711-0cb654bc73e4}";
                    BuiltInFieldId.IMAddress = "{4cbd96f7-09c6-4b5e-ad42-1cbe123de63a}";
                    BuiltInFieldId.HomeAddressStreet = "{8c66e340-0985-4d68-af03-3050ece4862b}";
                    BuiltInFieldId.HomeAddressCity = "{5aeabc56-57c6-4861-bc12-bd72c30fc6bd}";
                    BuiltInFieldId.HomeAddressStateOrProvince = "{f5b36006-69b0-418c-bd4a-f25ca7e096bb}";
                    BuiltInFieldId.HomeAddressPostalCode = "{c0e4b4c6-6245-4846-8561-b8c6c01fefc1}";
                    BuiltInFieldId.HomeAddressCountry = "{897ecfd7-4293-4782-b463-bd68440a5fed}";
                    BuiltInFieldId.OtherAddressStreet = "{dff5dfc2-e2b7-4a19-bde7-76dabc90a3d2}";
                    BuiltInFieldId.OtherAddressCity = "{90fa9a8e-aac0-4828-9cb4-78f98416affa}";
                    BuiltInFieldId.OtherAddressStateOrProvince = "{f45883bc-8733-4b77-ab5d-43613986aa12}";
                    BuiltInFieldId.OtherAddressPostalCode = "{0557c3f8-60c4-4dfb-b5ba-bf3c4e4386b1}";
                    BuiltInFieldId.OtherAddressCountry = "{3c0e9e00-8fcc-479f-9d8d-3447cda34c5b}";
                    BuiltInFieldId.Email2 = "{e232d6c8-9f49-4be2-bb28-b90570bcf167}";
                    BuiltInFieldId.Email3 = "{8bd27dbd-29a0-4ccd-bcb4-03fe70c538b1}";
                    BuiltInFieldId.ol_Department = "{c814b2cf-84c6-4f56-b4a4-c766938a97c5}";
                    BuiltInFieldId.Office = "{26169ab2-4bd2-4870-b077-10f49c8a5822}";
                    BuiltInFieldId.Profession = "{f0753a13-44b1-4269-82af-5c34c57b0c67}";
                    BuiltInFieldId.ManagersName = "{ba934502-d68d-4960-a54b-51e15fef5fd3}";
                    BuiltInFieldId.AssistantsName = "{2aea194d-e399-4f05-95af-94f87b1f2687}";
                    BuiltInFieldId.Nickname = "{6b0a2cd7-a7f9-41ca-b932-f3bebb603793}";
                    BuiltInFieldId.SpouseName = "{f590b1de-8e28-4c17-91bc-bf4096024b7e}";
                    BuiltInFieldId.Birthday = "{c4c7d925-bc1b-4f37-826d-ac49b4fb1bc1}";
                    BuiltInFieldId.Anniversary = "{9d76802c-13c4-484a-9872-d7f9641c4672}";
                    BuiltInFieldId.Gender = "{23550288-91b5-4e7f-81f9-1a92661c4838}";
                    BuiltInFieldId.Initials = "{7a282f86-69d9-40ff-ae1c-c746cf21256b}";
                    BuiltInFieldId.Hobbies = "{203fa378-6eb8-4ed9-a4f9-221a4c1fbf46}";
                    BuiltInFieldId.ChildrensNames = "{6440b402-8ec5-4d7a-83f4-afccb556b5cc}";
                    BuiltInFieldId.UserField1 = "{566656f5-17b3-4291-98a5-5074aadf77b3}";
                    BuiltInFieldId.UserField2 = "{182d1b9e-1718-4e11-b279-38f7ed0a20d6}";
                    BuiltInFieldId.UserField3 = "{a03eb53e-f123-4af9-9355-f92bd75c00b3}";
                    BuiltInFieldId.UserField4 = "{adefa4ca-14c3-4694-b531-f51b706efe9d}";
                    BuiltInFieldId.GovernmentIDNumber = "{da31d3c9-f9da-4c35-88d4-60aafa4c3f19}";
                    BuiltInFieldId.ComputerNetworkName = "{86a78395-c8ad-429e-abff-be09417b523e}";
                    BuiltInFieldId.ReferredBy = "{9b4cc5a9-1119-43e4-b2a8-412c4031f92b}";
                    BuiltInFieldId.OrganizationalIDNumber = "{0850ae15-19dd-431f-9c2f-3aff3ae292ce}";
                    BuiltInFieldId.CustomerID = "{81368791-7cbc-4230-981a-a7669ade9801}";
                    BuiltInFieldId.PersonalWebsite = "{5aa071d9-3254-40fb-82df-5cedeff0c41e}";
                    BuiltInFieldId.FTPSite = "{d733736e-4204-4812-9565-191567b27e33}";
                    BuiltInFieldId.ParentVersionString = "{bc1a8efb-0f4c-49f8-a38f-7fe22af3d3e0}";
                    BuiltInFieldId.ParentLeafName = "{774eab3a-855f-4a34-99da-69dc21043bec}";
                    BuiltInFieldId._DCDateCreated = "{9f8b4ee0-84b7-42c6-a094-5cbde2115eb9}";
                    BuiltInFieldId._Identifier = "{3c76805f-ad45-483a-9c85-7ac24506ce1a}";
                    BuiltInFieldId._Version = "{78be84b9-d70c-447b-8275-8dcd768b6f92}";
                    BuiltInFieldId._Revision = "{16b4ab96-0ce5-4c82-a836-f3117e8996ff}";
                    BuiltInFieldId._DCDateModified = "{810dbd02-bbf5-4c67-b1ce-5ad7c5a512b2}";
                    BuiltInFieldId._LastPrinted = "{b835f7c6-88a0-45d5-80c9-7ab4b2888b2b}";
                    BuiltInFieldId._Contributor = "{370b7779-0344-4b9f-8f2d-dc1c62eae801}";
                    BuiltInFieldId._Coverage = "{3b1d59c0-26b1-4de6-abbd-3edb4e2c6eca}";
                    BuiltInFieldId._Format = "{36111fdd-2c65-41ac-b7ef-48b9b8da4526}";
                    BuiltInFieldId._Publisher = "{2eedd0ae-4281-4b77-99be-68f8b3ad8a7a}";
                    BuiltInFieldId._Relation = "{5e75c854-6e9d-405d-b6c1-f8725bae5822}";
                    BuiltInFieldId._RightsManagement = "{ada3f0cb-6f95-4588-bb08-d97cc0623522}";
                    BuiltInFieldId._Source = "{b0a3c1db-faf1-48f0-9be1-47d2fc8cb5d6}";
                    BuiltInFieldId._ResourceType = "{edecec70-f6e2-4c3c-a4c7-f61a515dfaa9}";
                    BuiltInFieldId._EditMenuTableStart2 = "{1344423c-c7f9-4134-88e4-ad842e2d723c}";
                    BuiltInFieldId.MyEditor = "{078b9dba-eb8c-4ec5-bfdd-8d220a3fcc5d}";
                    BuiltInFieldId.ThumbnailExists = "{1f43cd21-53c5-44c5-8675-b8bb86083244}";
                    BuiltInFieldId.AlternateThumbnailUrl = "{f39d44af-d3f3-4ae6-b43f-ac7330b5e9bd}";
                    BuiltInFieldId.PreviewExists = "{3ca8efcd-96e8-414f-ba90-4c8c4a8bfef8}";
                    BuiltInFieldId.IconOverlay = "{b77cdbcf-5dce-4937-85a7-9fc202705c91}";
                    BuiltInFieldId.UIVersion = "{8e334549-c2bd-4110-9f61-672971be6504}";
                    BuiltInFieldId.SortBehavior = "{423874f8-c300-4bfb-b7a1-42e2159e3b19}";
                    BuiltInFieldId.FolderChildCount = "{960ff01f-2b6d-4f1b-9c3f-e19ad8927341}";
                    BuiltInFieldId.ItemChildCount = "{b824e17e-a1b3-426e-aecf-f0184d900485}";
                    BuiltInFieldId.EmailHeaders = "{e6985df4-cf66-4313-bcda-d89744d3b02f}";
                    BuiltInFieldId.Predecessors = "{c3a92d97-2b77-4a25-9698-3ab54874bc6f}";
                    BuiltInFieldId.MobilePhone = "{bf03d3ca-aa6e-4845-809a-b4378b37ce08}";
                    BuiltInFieldId.wic_System_Copyright = "{f08ab41d-9a03-49ae-9413-6cd284a15625}";
                    BuiltInFieldId.PreviewOnForm = "{8c0d0aac-9b76-4951-927a-2490abe13c0b}";
                    BuiltInFieldId.ThumbnailOnForm = "{9941082a-4160-46a1-a5b2-03394bfdf7ee}";
                    BuiltInFieldId.NoCodeVisibility = "{a05a8639-088a-4aea-b8a9-afc888971c81}";
                    BuiltInFieldId.AssociatedListId = "{b75067a2-e23b-499f-aa07-4ceb6c79e0b3}";
                    BuiltInFieldId.RestrictContentTypeId = "{8b02a33c-accd-4b73-bcae-6932c7aab812}";
                    BuiltInFieldId.WorkflowDisplayName = "{5263cd09-a770-4549-b012-d9f3df3d8df6}";
                    BuiltInFieldId.ParticipantsPicker = "{8137f7ad-9170-4c1d-a17b-4ca7f557bc88}";
                    BuiltInFieldId.Participants = "{453c2d71-c41e-46bc-97c1-a5a9535053a3}";
                    BuiltInFieldId.Facilities = "{a4e7b3e1-1b0a-4ffa-8426-c94d4cb8cc57}";
                    BuiltInFieldId.FreeBusy = "{393003f9-6ccb-4ea9-9623-704aa4748dec}";
                    BuiltInFieldId.Overbook = "{d8cd5bcf-3768-4d6c-a8aa-fefa3c793d8d}";
                    BuiltInFieldId.GbwLocation = "{afaa4198-9797-4e45-9825-8f7e7b0f5dd5}";
                    BuiltInFieldId.GbwCategory = "{7fc04acf-6b4f-418c-8dc5-ecfb0085bb51}";
                    BuiltInFieldId.WhatsNew = "{cf68a174-123b-413e-9ec1-b43e3a3175d7}";
                    BuiltInFieldId.DueDate = "{c1e86ea6-7603-493c-ab5d-db4bbfe8f96a}";
                    BuiltInFieldId.Confidential = "{9b0e6471-c5c5-42ef-9ade-63170bf28819}";
                    BuiltInFieldId.AllowEditing = "{7266b59c-030b-4ca3-bc09-bb8e76ad969b}";
                    BuiltInFieldId.V4SendTo = "{e0f298a5-7e3e-4895-9ff8-90d88ec4526d}";
                    BuiltInFieldId.Confirmations = "{ef7465d3-5d54-487b-b081-ade80acae88e}";
                    BuiltInFieldId.V4CallTo = "{7111aa1b-e7ae-4b69-acaf-db669b76e03a}";
                    BuiltInFieldId.ConfirmedTo = "{1b89212c-1c67-487a-8c14-4d30bf4ef223}";
                    BuiltInFieldId.CallBack = "{274b7e21-284a-4c49-bec6-f1f2cb6fc344}";
                    BuiltInFieldId.Detail = "{6529a881-d745-4117-a552-3dcc7110e9b8}";
                    BuiltInFieldId.CallTime = "{63fc6806-db53-4d0d-b18b-eaf90e96ddf5}";
                    BuiltInFieldId.Resolved = "{a6fd2bb9-c701-4168-99cc-242e42f7671a}";
                    BuiltInFieldId.ResolvedBy = "{b4fa187b-eb65-478e-8bc6-93b0da320f03}";
                    BuiltInFieldId.ResolvedDate = "{c4995c71-4c5c-4e9f-afc1-a9033f2bfde5}";
                    BuiltInFieldId.Description = "{3f155110-a6a2-4d70-926c-94648101f0e8}";
                    BuiltInFieldId.HolidayDate = "{335e22c3-b8a4-4234-9790-7a03eeb7b0d4}";
                    BuiltInFieldId.V4HolidayDate = "{492b1ac0-c594-4013-a2b6-ea70f5a8a506}";
                    BuiltInFieldId.IsNonWorkingDay = "{baf7091c-01fb-4831-a975-08254f87f234}";
                    BuiltInFieldId.UserName = "{211a8cfc-93b7-4173-9254-0bfe2d1643da}";
                    BuiltInFieldId.Date = "{2139e5cc-6c75-4a65-b84c-00fe93027db3}";
                    BuiltInFieldId.DayOfWeek = "{61fc45dd-b33d-4679-8646-be9e6584fadd}";
                    BuiltInFieldId.Start = "{05e6336c-d22e-478e-9414-366762883b3f}";
                    BuiltInFieldId.End = "{04b29608-b1e8-4ff9-90d5-5328096dd5ac}";
                    BuiltInFieldId.In = "{ee394fd4-4c11-4d8e-baff-83270c1921aa}";
                    BuiltInFieldId.Out = "{fde05b9b-52bf-43dc-9b96-bb35fa7aa05d}";
                    BuiltInFieldId.Break = "{9b12fb06-254e-43b3-bfc8-8eea422ebc9f}";
                    BuiltInFieldId.ScheduledWork = "{3bdf7bd3-f229-419e-8e12-3dfecb49ed38}";
                    BuiltInFieldId.Overtime = "{35d79e8b-3701-4659-9c27-c070ed3c2bfa}";
                    BuiltInFieldId.NightWork = "{aaa68c08-6276-4337-9bce-b9cd852c7328}";
                    BuiltInFieldId.HolidayWork = "{b5a7350f-2716-46ca-9c42-66bb39d042ec}";
                    BuiltInFieldId.HolidayNightWork = "{dc9100ec-251d-4e81-a6cb-d967a065ba24}";
                    BuiltInFieldId.Late = "{df7f27a4-d87b-4a97-947b-13d1d4f7e6de}";
                    BuiltInFieldId.LeaveEarly = "{a2a86efe-c28e-4dde-ab56-0afa31664bbc}";
                    BuiltInFieldId.Oof = "{63c1c608-df6f-4cfa-bcab-fdbf9c223e31}";
                    BuiltInFieldId.Vacation = "{dfd58778-bf8e-4769-8265-09ac03159eed}";
                    BuiltInFieldId.NumberOfVacation = "{44e16d52-da1b-4e72-8bdb-89a3b77ec8b0}";
                    BuiltInFieldId.ShortComment = "{691b9a4b-512e-4341-b3f1-68914130d5b2}";
                    BuiltInFieldId.ListType = "{81dde544-1e25-4765-b5fd-ba613198d850}";
                    BuiltInFieldId.Content = "{7650d41a-fa26-4c72-a641-af4e93dc7053}";
                    BuiltInFieldId.MobileContent = "{53a2a512-d395-4852-8714-d4c27e7585f3}";
                    BuiltInFieldId.Whereabout = "{e2a07293-596a-4c59-9089-5c4f9339077f}";
                    BuiltInFieldId.From = "{4cd541b9-c8ee-468f-bee6-33f3b9baa722}";
                    BuiltInFieldId.GoFromHome = "{6570d35e-7f0a-4123-93c9-f53ffa5810d3}";
                    BuiltInFieldId.Until = "{fe3344ab-b468-471f-8fa5-9b506c7d1557}";
                    BuiltInFieldId.GoingHome = "{2ead592e-f05c-41a2-9817-e06dac25bc19}";
                    BuiltInFieldId.ContactInfo = "{e1a85174-b8d0-4962-9ce6-758f8b612725}";
                    BuiltInFieldId.IMEDisplay = "{90244050-709c-4837-9316-93863fbd3da6}";
                    BuiltInFieldId.IMEComment1 = "{d2433b20-3f02-4432-817d-369f104a2dcd}";
                    BuiltInFieldId.IMEComment2 = "{e2c93917-cf32-4b29-be5c-d71f1bac7714}";
                    BuiltInFieldId.IMEComment3 = "{7c52f61a-e1e0-4341-9e2f-9b36cddfdd7c}";
                    BuiltInFieldId.IMEUrl = "{84b0fe85-6b16-40c3-8507-e56c5bbc482e}";
                    BuiltInFieldId.IMEPos = "{f3cdbcfd-f456-45f4-9000-b6f34bb95d84}";
                    BuiltInFieldId.HealthRuleService = "{2d6e61d0-be31-460c-ab8b-77d8b369f517}";
                    BuiltInFieldId.HealthRuleType = "{7dd0a092-8704-4ed2-8253-ac309150ac59}";
                    BuiltInFieldId.HealthRuleScope = "{e59f08c9-fa34-4f94-a00a-f6458b1d3c56}";
                    BuiltInFieldId.HealthRuleSchedule = "{26761ba3-729d-4bfc-9658-77b55e01f8d5}";
                    BuiltInFieldId.HealthReportServers = "{84a318aa-9035-4529-98b9-e08bb20a5da0}";
                    BuiltInFieldId.HealthReportServices = "{e2b0b450-6795-4b86-86b7-3c21ab1797fb}";
                    BuiltInFieldId.HealthReportCategory = "{a63505f2-f42c-4d94-b03b-78ba2c73d40e}";
                    BuiltInFieldId.HealthReportExplanation = "{b4c8faec-5d60-49ee-a5fb-6165f5c3e6a9}";
                    BuiltInFieldId.HealthReportRemedy = "{8aa22caa-8000-44c9-b343-a7705bbed863}";
                    BuiltInFieldId.HealthRuleReportLink = "{cf4ff575-f1f5-4c5b-b595-54bbcccd0c62}";
                    BuiltInFieldId.HealthReportSeverityIcon = "{89efcbd9-9796-41f0-b569-65325f1882dc}";
                    BuiltInFieldId.HealthReportSeverity = "{505423c5-f085-48b9-9432-12073d643ba5}";
                    BuiltInFieldId.HealthRuleAutoRepairEnabled = "{1e41a55e-ef71-4740-b65a-d11e24c1d00d}";
                    BuiltInFieldId.HealthRuleCheckEnabled = "{7b2b1712-a73d-4ad7-a9d0-662f0291713d}";
                    BuiltInFieldId.HealthRuleVersion = "{6b6b1455-09ee-43b7-beea-4dc97456de2f}";
                    BuiltInFieldId.XSLStyleCategory = "{dfffbbfb-0cc3-4ce7-8cb3-a2958fb726a1}";
                    BuiltInFieldId.XSLStyleWPType = "{4499086f-9ac1-41df-86c3-d8c1f8fc769a}";
                    BuiltInFieldId.XSLStyleIconUrl = "{3dfb3e11-9ccd-4404-b44a-a71f6399ea56}";
                    BuiltInFieldId.XSLStyleBaseView = "{4630e6ac-e543-4667-935a-2cc665e9b755}";
                    BuiltInFieldId.XSLStyleRequiredFields = "{acb9088a-a171-4b99-aa7a-10388586bc74}";
                    BuiltInFieldId.ParentID = "{fd447db5-3908-4b47-8f8c-a5895ed0aa6a}";
                    BuiltInFieldId.AppAuthor = "{6bfaba20-36bf-44b5-a1b2-eb6346d49716}";
                    BuiltInFieldId.AppEditor = "{e08400f3-c779-4ed2-a18c-ab7f34caa318}";
                    BuiltInFieldId.NoCrawl = "{b0e12a3b-cf63-47d1-8418-4ef850d87a3c}";
                    BuiltInFieldId.PrincipalCount = "{dcc67ebd-247f-4bee-8626-85ff6f69fbb6}";
                    BuiltInFieldId.Checkmark = "{ebf1c037-47eb-4355-998d-47ce9f2cc047}";
                    BuiltInFieldId.RelatedLinks = "{1ad7c220-c893-4c15-b95c-b69b992bdee2}";
                    BuiltInFieldId.MUILanguages = "{fb005daa-caf9-4ecd-84d5-6bdd2eb3dce7}";
                    BuiltInFieldId.ContentLanguages = "{58073ebd-b204-4899-bc77-54402c61e9e9}";
                    BuiltInFieldId.UserInfoHidden = "{e8a80787-5f99-459a-af8d-b830157ed45f}";
                    BuiltInFieldId.IsFeatured = "{5a034ff8-d7a4-4d69-ab26-5f5a043b572d}";
                    BuiltInFieldId.DisplayTemplateJSTemplateHidden = "{3d0684f7-ca97-413d-9d03-d00f480059ae}";
                    BuiltInFieldId.DisplayTemplateJSTargetControlType = "{0e49b273-3102-4b7d-b609-2e05dd1a17d9}";
                    BuiltInFieldId.DisplayTemplateJSIconUrl = "{57468ccb-0c02-422c-ba0a-61a44ba41784}";
                    BuiltInFieldId.DisplayTemplateJSTemplateType = "{d63173ac-b914-4f90-9cf8-4ff4352e41a3}";
                    BuiltInFieldId.DisplayTemplateJSTargetScope = "{df8bd7e5-b3db-4a94-afb4-7296397d829d}";
                    BuiltInFieldId.DisplayTemplateJSTargetListTemplate = "{9f927425-78e9-49c3-b03b-65e1211394e1}";
                    BuiltInFieldId.DisplayTemplateJSTargetContentType = "{ed095cf7-534e-460b-965f-f14269e70f5a}";
                    BuiltInFieldId.DisplayTemplateJSConfigurationUrl = "{0f2f686a-3921-432e-85fd-9c535bf671b2}";
                    BuiltInFieldId.DefaultCssFile = "{cc10b158-50b4-4f02-8f3a-b9b6c3102628}";
                    BuiltInFieldId.RelatedItems = "{d2a04afc-9a05-48c8-a7fa-fa98f9496141}";
                    BuiltInFieldId.PreviouslyAssignedTo = "{1982e408-0f94-4149-8349-16f301d89134}";
                    return BuiltInFieldId;
                })();
                Enums.BuiltInFieldId = BuiltInFieldId;
            })(Enums = Core.Enums || (Core.Enums = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Enums;
            (function (Enums) {
                (function (BuiltInIdentity) {
                    BuiltInIdentity[BuiltInIdentity["Everyone"] = 0] = "Everyone";
                    BuiltInIdentity[BuiltInIdentity["EveryoneButExternalUsers"] = 1] = "EveryoneButExternalUsers";
                })(Enums.BuiltInIdentity || (Enums.BuiltInIdentity = {}));
                var BuiltInIdentity = Enums.BuiltInIdentity;
            })(Enums = Core.Enums || (Core.Enums = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Enums;
            (function (Enums) {
                var Constants = (function () {
                    function Constants() {
                        this.APPSIDELOADINGFEATUREID = "AE3A1339-61F5-4f8f-81A7-ABD2DA956A7D";
                        this.MINIMALDOWNLOADSTRATEGYFEATUREID = "87294c72-f260-42f3-a41b-981a2ffce37a";
                        this.LOGGING_SOURCE = "OfficeDevPnP.Core";
                        this.LOGGING_SOURCE_FRAMEWORK_PROVISIONING = "PnP Provisioning";
                        this.FIELD_XML_FORMAT = "<Field Type=\"{0}\" Name=\"{1}\" DisplayName=\"{2}\" ID=\"{3}\" Group=\"{4}\" Required=\"{5}\" {6}/>";
                        this.FIELD_XML_PARAMETER_FORMAT = "{0}=\"{1}\"";
                        this.FIELD_XML_PARAMETER_WRAPPER_FORMAT = "<Params {0}></Params>";
                        this.TAXONOMY_FIELD_XML_FORMAT = "<Field Type=\"{0}\" DisplayName=\"{1}\" ID=\"{8}\" ShowField=\"Term1033\" Required=\"{2}\" EnforceUniqueValues=\"FALSE\" {3} Sortable=\"FALSE\" Name=\"{4}\" Group=\"{9}\"><Default/><Customization><ArrayOfProperty><Property><Name>SspId</Name><Value xmlns:q1=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q1:string\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">{5}</Value></Property><Property><Name>GroupId</Name></Property><Property><Name>TermSetId</Name><Value xmlns:q2=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q2:string\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">{6}</Value></Property><Property><Name>AnchorId</Name><Value xmlns:q3=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q3:string\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">00000000-0000-0000-0000-000000000000</Value></Property><Property><Name>UserCreated</Name><Value xmlns:q4=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q4:boolean\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">false</Value></Property><Property><Name>Open</Name><Value xmlns:q5=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q5:boolean\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">false</Value></Property><Property><Name>TextField</Name><Value xmlns:q6=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q6:string\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">{7}</Value></Property><Property><Name>IsPathRendered</Name><Value xmlns:q7=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q7:boolean\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">true</Value></Property><Property><Name>IsKeyword</Name><Value xmlns:q8=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q8:boolean\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">false</Value></Property><Property><Name>TargetTemplate</Name></Property><Property><Name>CreateValuesInEditForm</Name><Value xmlns:q9=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q9:boolean\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">false</Value></Property><Property><Name>FilterAssemblyStrongName</Name><Value xmlns:q10=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q10:string\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">Microsoft.SharePoint.Taxonomy, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c</Value></Property><Property><Name>FilterClassName</Name><Value xmlns:q11=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q11:string\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">Microsoft.SharePoint.Taxonomy.TaxonomyField</Value></Property><Property><Name>FilterMethodName</Name><Value xmlns:q12=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q12:string\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">GetFilteringHtml</Value></Property><Property><Name>FilterJavascriptProperty</Name><Value xmlns:q13=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q13:string\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">FilteringJavascript</Value></Property></ArrayOfProperty></Customization></Field>";
                        this.THEMES_DIRECTORY = "/_catalogs/theme/15/{0}";
                        this.MASTERPAGE_SEATTLE = "/_catalogs/masterpage/seattle.master";
                        this.MASTERPAGE_DIRECTORY = "/_catalogs/masterpage/{0}";
                        this.MASTERPAGE_CONTENT_TYPE = "0x01010500B45822D4B60B7B40A2BFCC0995839404";
                        this.PAGE_LAYOUT_CONTENT_TYPE = "0x01010007FF3E057FA8AB4AA42FCB67B453FFC100E214EEE741181F4E9F7ACC43278EE811";
                        this.HTMLPAGE_LAYOUT_CONTENT_TYPE = "0x01010007FF3E057FA8AB4AA42FCB67B453FFC100E214EEE741181F4E9F7ACC43278EE8110003D357F861E29844953D5CAA1D4D8A3B001EC1BD45392B7A458874C52A24C9F70B";
                    }
                    return Constants;
                })();
                Enums.Constants = Constants;
            })(Enums = Core.Enums || (Core.Enums = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Enums;
            (function (Enums) {
                (function (EcmListManualRecordDeclaration) {
                    EcmListManualRecordDeclaration[EcmListManualRecordDeclaration["Unknown"] = 0] = "Unknown";
                    EcmListManualRecordDeclaration[EcmListManualRecordDeclaration["UseSiteCollectionDefaults"] = 1] = "UseSiteCollectionDefaults";
                    EcmListManualRecordDeclaration[EcmListManualRecordDeclaration["AlwaysAllowManualDeclaration"] = 2] = "AlwaysAllowManualDeclaration";
                    EcmListManualRecordDeclaration[EcmListManualRecordDeclaration["NeverAllowManualDeclaration"] = 3] = "NeverAllowManualDeclaration";
                })(Enums.EcmListManualRecordDeclaration || (Enums.EcmListManualRecordDeclaration = {}));
                var EcmListManualRecordDeclaration = Enums.EcmListManualRecordDeclaration;
            })(Enums = Core.Enums || (Core.Enums = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Enums;
            (function (Enums) {
                (function (EcmRecordDeclarationBy) {
                    EcmRecordDeclarationBy[EcmRecordDeclarationBy["Unknown"] = 0] = "Unknown";
                    EcmRecordDeclarationBy[EcmRecordDeclarationBy["AllListContributors"] = 1] = "AllListContributors";
                    EcmRecordDeclarationBy[EcmRecordDeclarationBy["OnlyAdmins"] = 2] = "OnlyAdmins";
                    EcmRecordDeclarationBy[EcmRecordDeclarationBy["OnlyPolicy"] = 3] = "OnlyPolicy";
                })(Enums.EcmRecordDeclarationBy || (Enums.EcmRecordDeclarationBy = {}));
                var EcmRecordDeclarationBy = Enums.EcmRecordDeclarationBy;
            })(Enums = Core.Enums || (Core.Enums = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Enums;
            (function (Enums) {
                (function (EcmSiteRecordRestrictions) {
                    EcmSiteRecordRestrictions[EcmSiteRecordRestrictions["Unknown"] = 0] = "Unknown";
                    EcmSiteRecordRestrictions[EcmSiteRecordRestrictions["None"] = 1] = "None";
                    EcmSiteRecordRestrictions[EcmSiteRecordRestrictions["BlockDelete"] = 16] = "BlockDelete";
                    EcmSiteRecordRestrictions[EcmSiteRecordRestrictions["BlockEdit"] = 256] = "BlockEdit";
                })(Enums.EcmSiteRecordRestrictions || (Enums.EcmSiteRecordRestrictions = {}));
                var EcmSiteRecordRestrictions = Enums.EcmSiteRecordRestrictions;
            })(Enums = Core.Enums || (Core.Enums = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Enums;
            (function (Enums) {
                (function (NavigationType) {
                    NavigationType[NavigationType["TopNavigationBar"] = 0] = "TopNavigationBar";
                    NavigationType[NavigationType["QuickLaunch"] = 1] = "QuickLaunch";
                    NavigationType[NavigationType["SearchNav"] = 2] = "SearchNav";
                })(Enums.NavigationType || (Enums.NavigationType = {}));
                var NavigationType = Enums.NavigationType;
            })(Enums = Core.Enums || (Core.Enums = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Enums;
            (function (Enums) {
                (function (SharePointPlatform) {
                    SharePointPlatform[SharePointPlatform["None"] = 0] = "None";
                    SharePointPlatform[SharePointPlatform["Office365"] = 1] = "Office365";
                    SharePointPlatform[SharePointPlatform["Office365Dedicated"] = 2] = "Office365Dedicated";
                    SharePointPlatform[SharePointPlatform["OnPremises"] = 3] = "OnPremises";
                })(Enums.SharePointPlatform || (Enums.SharePointPlatform = {}));
                var SharePointPlatform = Enums.SharePointPlatform;
            })(Enums = Core.Enums || (Core.Enums = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Enums;
            (function (Enums) {
                (function (StructuralNavigationSortBy) {
                    StructuralNavigationSortBy[StructuralNavigationSortBy["Title"] = 0] = "Title";
                    StructuralNavigationSortBy[StructuralNavigationSortBy["CreatedDate"] = 1] = "CreatedDate";
                    StructuralNavigationSortBy[StructuralNavigationSortBy["LastModifiedDate"] = 2] = "LastModifiedDate";
                })(Enums.StructuralNavigationSortBy || (Enums.StructuralNavigationSortBy = {}));
                var StructuralNavigationSortBy = Enums.StructuralNavigationSortBy;
            })(Enums = Core.Enums || (Core.Enums = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Enums;
            (function (Enums) {
                (function (StructuralNavigationSorting) {
                    StructuralNavigationSorting[StructuralNavigationSorting["Automatically"] = 0] = "Automatically";
                    StructuralNavigationSorting[StructuralNavigationSorting["ManuallyButPagesAutomatically"] = 1] = "ManuallyButPagesAutomatically";
                    StructuralNavigationSorting[StructuralNavigationSorting["Manually"] = 2] = "Manually";
                })(Enums.StructuralNavigationSorting || (Enums.StructuralNavigationSorting = {}));
                var StructuralNavigationSorting = Enums.StructuralNavigationSorting;
            })(Enums = Core.Enums || (Core.Enums = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Enums;
            (function (Enums) {
                (function (SiteLockState) {
                    SiteLockState[SiteLockState["Unlock"] = 0] = "Unlock";
                    SiteLockState[SiteLockState["NoAccess"] = 1] = "NoAccess";
                })(Enums.SiteLockState || (Enums.SiteLockState = {}));
                var SiteLockState = Enums.SiteLockState;
            })(Enums = Core.Enums || (Core.Enums = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Enums;
            (function (Enums) {
                (function (TimeZone) {
                    TimeZone[TimeZone["None"] = 0] = "None";
                    TimeZone[TimeZone["UTC_GREENWICH_MEAN_TIME_DUBLIN_EDINBURGH_LISBON_LONDON"] = 2] = "UTC_GREENWICH_MEAN_TIME_DUBLIN_EDINBURGH_LISBON_LONDON";
                    TimeZone[TimeZone["UTCPLUS0100_BRUSSELS_COPENHAGEN_MADRID_PARIS"] = 3] = "UTCPLUS0100_BRUSSELS_COPENHAGEN_MADRID_PARIS";
                    TimeZone[TimeZone["UTCPLUS0100_AMSTERDAM_BERLIN_BERN_ROME_STOCKHOLM_VIENNA"] = 4] = "UTCPLUS0100_AMSTERDAM_BERLIN_BERN_ROME_STOCKHOLM_VIENNA";
                    TimeZone[TimeZone["UTCPLUS0200_ATHENS_BUCHAREST_ISTANBUL"] = 5] = "UTCPLUS0200_ATHENS_BUCHAREST_ISTANBUL";
                    TimeZone[TimeZone["UTCPLUS0100_BELGRADE_BRATISLAVA_BUDAPEST_LJUBLJANA_PRAGUE"] = 6] = "UTCPLUS0100_BELGRADE_BRATISLAVA_BUDAPEST_LJUBLJANA_PRAGUE";
                    TimeZone[TimeZone["UTCPLUS0200_MINSK"] = 7] = "UTCPLUS0200_MINSK";
                    TimeZone[TimeZone["UTCMINUS0300_BRASILIA"] = 8] = "UTCMINUS0300_BRASILIA";
                    TimeZone[TimeZone["UTCMINUS0400_ATLANTIC_TIME_CANADA"] = 9] = "UTCMINUS0400_ATLANTIC_TIME_CANADA";
                    TimeZone[TimeZone["UTCMINUS0500_EASTERN_TIME_US_AND_CANADA"] = 10] = "UTCMINUS0500_EASTERN_TIME_US_AND_CANADA";
                    TimeZone[TimeZone["UTCMINUS0600_CENTRAL_TIME_US_AND_CANADA"] = 11] = "UTCMINUS0600_CENTRAL_TIME_US_AND_CANADA";
                    TimeZone[TimeZone["UTCMINUS0700_MOUNTAIN_TIME_US_AND_CANADA"] = 12] = "UTCMINUS0700_MOUNTAIN_TIME_US_AND_CANADA";
                    TimeZone[TimeZone["UTCMINUS0800_PACIFIC_TIME_US_AND_CANADA"] = 13] = "UTCMINUS0800_PACIFIC_TIME_US_AND_CANADA";
                    TimeZone[TimeZone["UTCMINUS0900_ALASKA"] = 14] = "UTCMINUS0900_ALASKA";
                    TimeZone[TimeZone["UTCMINUS1000_HAWAII"] = 15] = "UTCMINUS1000_HAWAII";
                    TimeZone[TimeZone["UTCMINUS1100_MIDWAY_ISLAND_SAMOA"] = 16] = "UTCMINUS1100_MIDWAY_ISLAND_SAMOA";
                    TimeZone[TimeZone["UTCPLUS1200_AUKLAND_WELLINGTON"] = 17] = "UTCPLUS1200_AUKLAND_WELLINGTON";
                    TimeZone[TimeZone["UTCPLUS1000_BRISBANE"] = 18] = "UTCPLUS1000_BRISBANE";
                    TimeZone[TimeZone["UTCPLUS0930_ADELAIDE"] = 19] = "UTCPLUS0930_ADELAIDE";
                    TimeZone[TimeZone["UTCPLUS0900_OSAKA_SAPPORO_TOKYO"] = 20] = "UTCPLUS0900_OSAKA_SAPPORO_TOKYO";
                    TimeZone[TimeZone["UTCPLUS0800_KUALA_LUMPUR_SINGAPORE"] = 21] = "UTCPLUS0800_KUALA_LUMPUR_SINGAPORE";
                    TimeZone[TimeZone["UTCPLUS0700_BANGKOK_HANOI_JAKARTA"] = 22] = "UTCPLUS0700_BANGKOK_HANOI_JAKARTA";
                    TimeZone[TimeZone["UTCPLUS0530_CHENNAI_KOLKATA_MUMBAI_NEW_DELHI"] = 23] = "UTCPLUS0530_CHENNAI_KOLKATA_MUMBAI_NEW_DELHI";
                    TimeZone[TimeZone["UTCPLUS0400_ABU_DHABI_MUSCAT"] = 24] = "UTCPLUS0400_ABU_DHABI_MUSCAT";
                    TimeZone[TimeZone["UTCPLUS0330_TEHRAN"] = 25] = "UTCPLUS0330_TEHRAN";
                    TimeZone[TimeZone["UTCPLUS0300_BAGHDAD"] = 26] = "UTCPLUS0300_BAGHDAD";
                    TimeZone[TimeZone["UTCPLUS0200_JERUSALEM"] = 27] = "UTCPLUS0200_JERUSALEM";
                    TimeZone[TimeZone["UTCMINUS0330_NEWFOUNDLAND_AND_LABRADOR"] = 28] = "UTCMINUS0330_NEWFOUNDLAND_AND_LABRADOR";
                    TimeZone[TimeZone["UTCMINUS0100_AZORES"] = 29] = "UTCMINUS0100_AZORES";
                    TimeZone[TimeZone["UTCMINUS0200_MID_ATLANTIC"] = 30] = "UTCMINUS0200_MID_ATLANTIC";
                    TimeZone[TimeZone["UTC_MONROVIA"] = 31] = "UTC_MONROVIA";
                    TimeZone[TimeZone["UTCMINUS0300_CAYENNE"] = 32] = "UTCMINUS0300_CAYENNE";
                    TimeZone[TimeZone["UTCMINUS0400_GEORGETOWN_LA_PAZ_SAN_JUAN"] = 33] = "UTCMINUS0400_GEORGETOWN_LA_PAZ_SAN_JUAN";
                    TimeZone[TimeZone["UTCMINUS0500_INDIANA_EAST"] = 34] = "UTCMINUS0500_INDIANA_EAST";
                    TimeZone[TimeZone["UTCMINUS0500_BOGOTA_LIMA_QUITO"] = 35] = "UTCMINUS0500_BOGOTA_LIMA_QUITO";
                    TimeZone[TimeZone["UTCMINUS0600_SASKATCHEWAN"] = 36] = "UTCMINUS0600_SASKATCHEWAN";
                    TimeZone[TimeZone["UTCMINUS0600_GUADALAJARA_MEXICO_CITY_MONTERREY"] = 37] = "UTCMINUS0600_GUADALAJARA_MEXICO_CITY_MONTERREY";
                    TimeZone[TimeZone["UTCMINUS0700_ARIZONA"] = 38] = "UTCMINUS0700_ARIZONA";
                    TimeZone[TimeZone["UTCMINUS1200_INTERNATIONAL_DATE_LINE_WEST"] = 39] = "UTCMINUS1200_INTERNATIONAL_DATE_LINE_WEST";
                    TimeZone[TimeZone["UTCPLUS1200_FIJI_ISLANDS_MARSHALL_ISLANDS"] = 40] = "UTCPLUS1200_FIJI_ISLANDS_MARSHALL_ISLANDS";
                    TimeZone[TimeZone["UTCPLUS1100_MADAGAN_SOLOMON_ISLANDS_NEW_CALENDONIA"] = 41] = "UTCPLUS1100_MADAGAN_SOLOMON_ISLANDS_NEW_CALENDONIA";
                    TimeZone[TimeZone["UTCPLUS1000_HOBART"] = 42] = "UTCPLUS1000_HOBART";
                    TimeZone[TimeZone["UTCPLUS1000_GUAM_PORT_MORESBY"] = 43] = "UTCPLUS1000_GUAM_PORT_MORESBY";
                    TimeZone[TimeZone["UTCPLUS0930_DARWIN"] = 44] = "UTCPLUS0930_DARWIN";
                    TimeZone[TimeZone["UTCPLUS0800_BEIJING_CHONGQING_HONG_KONG_SAR_URUMQI"] = 45] = "UTCPLUS0800_BEIJING_CHONGQING_HONG_KONG_SAR_URUMQI";
                    TimeZone[TimeZone["UTCPLUS0600_NOVOSIBIRSK"] = 46] = "UTCPLUS0600_NOVOSIBIRSK";
                    TimeZone[TimeZone["UTCPLUS0500_TASHKENT"] = 47] = "UTCPLUS0500_TASHKENT";
                    TimeZone[TimeZone["UTCPLUS0430_KABUL"] = 48] = "UTCPLUS0430_KABUL";
                    TimeZone[TimeZone["UTCPLUS0200_CAIRO"] = 49] = "UTCPLUS0200_CAIRO";
                    TimeZone[TimeZone["UTCPLUS0200_HARARE_PRETORIA"] = 50] = "UTCPLUS0200_HARARE_PRETORIA";
                    TimeZone[TimeZone["UTCPLUS0300_MOSCOW_STPETERSBURG_VOLGOGRAD"] = 51] = "UTCPLUS0300_MOSCOW_STPETERSBURG_VOLGOGRAD";
                    TimeZone[TimeZone["UTCMINUS0100_CAPE_VERDE_ISLANDS"] = 53] = "UTCMINUS0100_CAPE_VERDE_ISLANDS";
                    TimeZone[TimeZone["UTCPLUS0400_BAKU"] = 54] = "UTCPLUS0400_BAKU";
                    TimeZone[TimeZone["UTCMINUS0600_CENTRAL_AMERICA"] = 55] = "UTCMINUS0600_CENTRAL_AMERICA";
                    TimeZone[TimeZone["UTCPLUS0300_NAIROBI"] = 56] = "UTCPLUS0300_NAIROBI";
                    TimeZone[TimeZone["UTCPLUS0100_SARAJEVO_SKOPJE_WARSAW_ZAGREB"] = 57] = "UTCPLUS0100_SARAJEVO_SKOPJE_WARSAW_ZAGREB";
                    TimeZone[TimeZone["UTCPLUS0500_EKATERINBURG"] = 58] = "UTCPLUS0500_EKATERINBURG";
                    TimeZone[TimeZone["UTCPLUS0200_HELSINKI_KYIV_RIGA_SOFIA_TALLINN_VILNIUS"] = 59] = "UTCPLUS0200_HELSINKI_KYIV_RIGA_SOFIA_TALLINN_VILNIUS";
                    TimeZone[TimeZone["UTCMINUS0300_GREENLAND"] = 60] = "UTCMINUS0300_GREENLAND";
                    TimeZone[TimeZone["UTCPLUS0630_YANGON_RANGOON"] = 61] = "UTCPLUS0630_YANGON_RANGOON";
                    TimeZone[TimeZone["UTCPLUS0545_KATHMANDU"] = 62] = "UTCPLUS0545_KATHMANDU";
                    TimeZone[TimeZone["UTCPLUS0800_IRKUTSK"] = 63] = "UTCPLUS0800_IRKUTSK";
                    TimeZone[TimeZone["UTCPLUS0700_KRASNOYARSK"] = 64] = "UTCPLUS0700_KRASNOYARSK";
                    TimeZone[TimeZone["UTCMINUS0400_SANTIAGO"] = 65] = "UTCMINUS0400_SANTIAGO";
                    TimeZone[TimeZone["UTCPLUS0530_SRI_JAYAWARDENEPURA"] = 66] = "UTCPLUS0530_SRI_JAYAWARDENEPURA";
                    TimeZone[TimeZone["UTCPLUS1300_NUKU_ALOFA"] = 67] = "UTCPLUS1300_NUKU_ALOFA";
                    TimeZone[TimeZone["UTCPLUS1000_VLADIVOSTOK"] = 68] = "UTCPLUS1000_VLADIVOSTOK";
                    TimeZone[TimeZone["UTCPLUS0100_WEST_CENTRAL_AFRICA"] = 69] = "UTCPLUS0100_WEST_CENTRAL_AFRICA";
                    TimeZone[TimeZone["UTCPLUS0900_YAKUTSK"] = 70] = "UTCPLUS0900_YAKUTSK";
                    TimeZone[TimeZone["UTCPLUS0600_ASTANA_DHAKA"] = 71] = "UTCPLUS0600_ASTANA_DHAKA";
                    TimeZone[TimeZone["UTCPLUS0900_SEOUL"] = 72] = "UTCPLUS0900_SEOUL";
                    TimeZone[TimeZone["UTCPLUS0800_PERTH"] = 73] = "UTCPLUS0800_PERTH";
                    TimeZone[TimeZone["UTCPLUS0300_KUWAIT_RIYADH"] = 74] = "UTCPLUS0300_KUWAIT_RIYADH";
                    TimeZone[TimeZone["UTCPLUS0800_TAIPEI"] = 75] = "UTCPLUS0800_TAIPEI";
                    TimeZone[TimeZone["UTCPLUS1000_CANBERRA_MELBOURNE_SYDNEY"] = 76] = "UTCPLUS1000_CANBERRA_MELBOURNE_SYDNEY";
                    TimeZone[TimeZone["UTCMINUS0700_CHIHUAHUA_LA_PAZ_MAZATLAN"] = 77] = "UTCMINUS0700_CHIHUAHUA_LA_PAZ_MAZATLAN";
                    TimeZone[TimeZone["UTCMINUS0800_TIJUANA_BAJA_CALFORNIA"] = 78] = "UTCMINUS0800_TIJUANA_BAJA_CALFORNIA";
                    TimeZone[TimeZone["UTCPLUS0200_AMMAN"] = 79] = "UTCPLUS0200_AMMAN";
                    TimeZone[TimeZone["UTCPLUS0200_BEIRUT"] = 80] = "UTCPLUS0200_BEIRUT";
                    TimeZone[TimeZone["UTCMINUS0400_MANAUS"] = 81] = "UTCMINUS0400_MANAUS";
                    TimeZone[TimeZone["UTCPLUS0400_TBILISI"] = 82] = "UTCPLUS0400_TBILISI";
                    TimeZone[TimeZone["UTCPLUS0200_WINDHOEK"] = 83] = "UTCPLUS0200_WINDHOEK";
                    TimeZone[TimeZone["UTCPLUS0400_YEREVAN"] = 84] = "UTCPLUS0400_YEREVAN";
                    TimeZone[TimeZone["UTCMINUS0300_BUENOS_AIRES"] = 85] = "UTCMINUS0300_BUENOS_AIRES";
                    TimeZone[TimeZone["UTC_CASABLANCA"] = 86] = "UTC_CASABLANCA";
                    TimeZone[TimeZone["UTCPLUS0500_ISLAMABAD_KARACHI"] = 87] = "UTCPLUS0500_ISLAMABAD_KARACHI";
                    TimeZone[TimeZone["UTCMINUS0430_CARACAS"] = 88] = "UTCMINUS0430_CARACAS";
                    TimeZone[TimeZone["UTCPLUS0400_PORT_LOUIS"] = 89] = "UTCPLUS0400_PORT_LOUIS";
                    TimeZone[TimeZone["UTCMINUS0300_MONTEVIDEO"] = 90] = "UTCMINUS0300_MONTEVIDEO";
                    TimeZone[TimeZone["UTCMINUS0400_ASUNCION"] = 91] = "UTCMINUS0400_ASUNCION";
                    TimeZone[TimeZone["UTCPLUS1200_PETROPAVLOVSK_KACHATSKY"] = 92] = "UTCPLUS1200_PETROPAVLOVSK_KACHATSKY";
                    TimeZone[TimeZone["UTC_COORDINATED_UNIVERSAL_TIME"] = 93] = "UTC_COORDINATED_UNIVERSAL_TIME";
                    TimeZone[TimeZone["UTCMINUS0800_ULAANBAATAR"] = 94] = "UTCMINUS0800_ULAANBAATAR";
                })(Enums.TimeZone || (Enums.TimeZone = {}));
                var TimeZone = Enums.TimeZone;
            })(Enums = Core.Enums || (Core.Enums = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Enums;
            (function (Enums) {
                (function (VotingExperience) {
                    VotingExperience[VotingExperience["Ratings"] = 0] = "Ratings";
                    VotingExperience[VotingExperience["Likes"] = 1] = "Likes";
                })(Enums.VotingExperience || (Enums.VotingExperience = {}));
                var VotingExperience = Enums.VotingExperience;
            })(Enums = Core.Enums || (Core.Enums = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Enums;
            (function (Enums) {
                (function (WikiPageLayout) {
                    WikiPageLayout[WikiPageLayout["OneColumn"] = 0] = "OneColumn";
                    WikiPageLayout[WikiPageLayout["OneColumnSideBar"] = 1] = "OneColumnSideBar";
                    WikiPageLayout[WikiPageLayout["TwoColumns"] = 2] = "TwoColumns";
                    WikiPageLayout[WikiPageLayout["TwoColumnsHeader"] = 3] = "TwoColumnsHeader";
                    WikiPageLayout[WikiPageLayout["TwoColumnsHeaderFooter"] = 4] = "TwoColumnsHeaderFooter";
                    WikiPageLayout[WikiPageLayout["ThreeColumns"] = 5] = "ThreeColumns";
                    WikiPageLayout[WikiPageLayout["ThreeColumnsHeader"] = 6] = "ThreeColumnsHeader";
                    WikiPageLayout[WikiPageLayout["ThreeColumnsHeaderFooter"] = 7] = "ThreeColumnsHeaderFooter";
                    WikiPageLayout[WikiPageLayout["Custom"] = 8] = "Custom";
                })(Enums.WikiPageLayout || (Enums.WikiPageLayout = {}));
                var WikiPageLayout = Enums.WikiPageLayout;
            })(Enums = Core.Enums || (Core.Enums = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Model;
            (function (Model) {
                var ContextFactoryInstance = (function () {
                    function ContextFactoryInstance() {
                    }
                    return ContextFactoryInstance;
                })();
                Model.ContextFactoryInstance = ContextFactoryInstance;
                var CurrentContextFactory = (function () {
                    function CurrentContextFactory() {
                    }
                    CurrentContextFactory.prototype.GetInstance = function () {
                        var instance = new ContextFactoryInstance();
                        var cc = SP.ClientContext.get_current();
                        instance.ClientContext = cc;
                        instance.Web = instance.ClientContext.get_web();
                        instance.siteAbsoluteUrl = _spPageContextInfo.siteAbsoluteUrl;
                        instance.webAbsoluteUrl = _spPageContextInfo.webAbsoluteUrl;
                        instance.webServerRelativeUrl = _spPageContextInfo.webServerRelativeUrl;
                        instance.siteServerRelativeUrl = _spPageContextInfo.siteServerRelativeUrl;
                        return instance;
                    };
                    return CurrentContextFactory;
                })();
                Model.CurrentContextFactory = CurrentContextFactory;
                var WebContextFactory = (function () {
                    function WebContextFactory(webUrl) {
                        this.webUrl = webUrl;
                    }
                    WebContextFactory.prototype.GetInstance = function () {
                        var instance = new ContextFactoryInstance();
                        instance.ClientContext = new SP.ClientContext(this.webUrl);
                        instance.Web = instance.ClientContext.get_web();
                        instance.siteAbsoluteUrl = this.webUrl;
                        instance.webAbsoluteUrl = this.webUrl;
                        instance.webServerRelativeUrl = this.webUrl.replace(window.location.protocol + '//' + window.location.host, "");
                        instance.siteServerRelativeUrl = this.webUrl.replace(window.location.protocol + '//' + window.location.host, "");
                        return instance;
                    };
                    return WebContextFactory;
                })();
                Model.WebContextFactory = WebContextFactory;
                var WebProxyContextFactory = (function () {
                    function WebProxyContextFactory(hostWebUrl, appWebUrl) {
                        this.appWebUrl = appWebUrl;
                        this.hostWebUrl = hostWebUrl;
                    }
                    WebProxyContextFactory.prototype.GetInstance = function () {
                        var instance = new ContextFactoryInstance();
                        var context = new SP.ClientContext(this.appWebUrl);
                        var factory = new SP.ProxyWebRequestExecutorFactory(this.appWebUrl);
                        context.set_webRequestExecutorFactory(factory);
                        var appContextSite = new SP.AppContextSite(context, this.hostWebUrl);
                        var web = appContextSite.get_web();
                        instance.ClientContext = context;
                        instance.Web = web;
                        instance.siteAbsoluteUrl = this.hostWebUrl;
                        instance.webAbsoluteUrl = this.hostWebUrl;
                        instance.webServerRelativeUrl = this.hostWebUrl.replace(window.location.protocol + '//' + window.location.host, "");
                        instance.siteServerRelativeUrl = this.hostWebUrl.replace(window.location.protocol + '//' + window.location.host, "");
                        return instance;
                    };
                    return WebProxyContextFactory;
                })();
                Model.WebProxyContextFactory = WebProxyContextFactory;
            })(Model = Core.Model || (Core.Model = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="IObjectHandler.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Model;
            (function (Model) {
                var ObjectHandlerBase = (function () {
                    function ObjectHandlerBase(name) {
                        this.name = name;
                    }
                    ObjectHandlerBase.prototype.ProvisionObjects = function (objects, parameters) { };
                    ObjectHandlerBase.prototype.ReadObjects = function (objects) { };
                    return ObjectHandlerBase;
                })();
                Model.ObjectHandlerBase = ObjectHandlerBase;
            })(Model = Core.Model || (Core.Model = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Model;
            (function (Model) {
                var ObjectHandlerList = (function () {
                    function ObjectHandlerList() {
                        this.List = [];
                        this.List.push(new Core.ObjectHandlers.AddIns().name);
                        this.List.push(new Core.ObjectHandlers.AuditSettings().name);
                        this.List.push(new Core.ObjectHandlers.ComposedLook().name);
                        this.List.push(new Core.ObjectHandlers.ContentTypes().name);
                        this.List.push(new Core.ObjectHandlers.CustomActions().name);
                        this.List.push(new Core.ObjectHandlers.Features().name);
                        this.List.push(new Core.ObjectHandlers.Files().name);
                        this.List.push(new Core.ObjectHandlers.Lists().name);
                        this.List.push(new Core.ObjectHandlers.LocalNavigation().name);
                        this.List.push(new Core.ObjectHandlers.Pages().name);
                        this.List.push(new Core.ObjectHandlers.PropertyBagEntries().name);
                        this.List.push(new Core.ObjectHandlers.Publishing().name);
                        this.List.push(new Core.ObjectHandlers.RegionalSettings().name);
                        this.List.push(new Core.ObjectHandlers.SearchSettings().name);
                        this.List.push(new Core.ObjectHandlers.Security().name);
                        this.List.push(new Core.ObjectHandlers.SiteFields().name);
                        this.List.push(new Core.ObjectHandlers.SitePolicy().name);
                        this.List.push(new Core.ObjectHandlers.SupportedUILanguages().name);
                        this.List.push(new Core.ObjectHandlers.TermGroups().name);
                        this.List.push(new Core.ObjectHandlers.WebSettings().name);
                        this.List.push(new Core.ObjectHandlers.Workflows().name);
                    }
                    return ObjectHandlerList;
                })();
                Model.ObjectHandlerList = ObjectHandlerList;
            })(Model = Core.Model || (Core.Model = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Model;
            (function (Model) {
                var TemplateQueueItem = (function () {
                    function TemplateQueueItem(name, index, objects, parameters, callback, factory) {
                        this.name = name;
                        this.index = index;
                        this.objects = objects;
                        this.parameters = parameters;
                        this.callback = callback;
                        this.contextFactory = factory;
                    }
                    TemplateQueueItem.prototype.execute = function (dependentPromise) {
                        var _this = this;
                        if (!dependentPromise) {
                            return this.callback(this.objects, this.parameters);
                        }
                        var def = jQuery.Deferred();
                        dependentPromise.done(function () {
                            return _this.callback(_this.objects, _this.parameters).done(function (result) {
                                def.resolve(result);
                            });
                        });
                        return def.promise();
                    };
                    return TemplateQueueItem;
                })();
                Model.TemplateQueueItem = TemplateQueueItem;
            })(Model = Core.Model || (Core.Model = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var ComposedLook = (function () {
                    function ComposedLook() {
                    }
                    return ComposedLook;
                })();
                Schema.ComposedLook = ComposedLook;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var AddIns = (function (_super) {
                    __extends(AddIns, _super);
                    function AddIns() {
                        _super.call(this, "AddIns");
                    }
                    AddIns.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    AddIns.prototype.ReadObjects = function (objects) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        objects = [];
                        var instances = SP.AppCatalog.getAppInstances(this.contextFactory.ClientContext, this.contextFactory.Web);
                        var clientContext = this.contextFactory.ClientContext;
                        clientContext.load(instances);
                        clientContext.executeQueryAsync(function () {
                            var ienumerator = instances.getEnumerator();
                            while (ienumerator.moveNext()) {
                                var app = ienumerator.get_current();
                                var a = new Core.Schema.Addin();
                                a.Title = app.get_title();
                                a.Id = app.get_id().toString();
                                objects.push(a);
                            }
                            Core.Log.Information(_this.name, "Code execution scope ended");
                            def.resolve(objects);
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Reading failed");
                            Core.Log.Error(_this.name, args.get_message());
                            def.resolve(objects);
                        });
                        return def.promise();
                    };
                    return AddIns;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.AddIns = AddIns;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var AuditSettings = (function () {
                    function AuditSettings() {
                    }
                    return AuditSettings;
                })();
                Schema.AuditSettings = AuditSettings;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IAuditSettings.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var AuditSettings = (function (_super) {
                    __extends(AuditSettings, _super);
                    function AuditSettings() {
                        _super.call(this, "AuditSettings");
                    }
                    AuditSettings.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        Core.Log.Information(this.name, "Audit Settings cannot be set via jsom.");
                        def.resolve();
                        return def.promise();
                    };
                    AuditSettings.prototype.ReadObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        Core.Log.Warning(this.name, "Audit Settings cannot be read via jsom.");
                        object = new Core.Schema.AuditSettings();
                        def.resolve(object);
                        return def.promise();
                    };
                    return AuditSettings;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.AuditSettings = AuditSettings;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var Helpers;
                (function (Helpers) {
                    function GetUrlWithoutTokens(url, contextFactory) {
                        return url.replace("{Site}", contextFactory.webAbsoluteUrl)
                            .replace("{SiteCollection}", contextFactory.siteAbsoluteUrl)
                            .replace("{SiteCollectionRelativeUrl}", contextFactory.siteServerRelativeUrl)
                            .replace("{themegallery}", contextFactory.siteServerRelativeUrl + "/_catalogs/theme/15");
                    }
                    Helpers.GetUrlWithoutTokens = GetUrlWithoutTokens;
                })(Helpers || (Helpers = {}));
                var ComposedLook = (function (_super) {
                    __extends(ComposedLook, _super);
                    function ComposedLook() {
                        _super.call(this, "ComposedLook");
                    }
                    ComposedLook.prototype.ProvisionObjects = function (object) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        var clientContext = this.contextFactory.ClientContext;
                        var web = this.contextFactory.Web;
                        var colorPaletteUrl = object.ColorFile ? Helpers.GetUrlWithoutTokens(object.ColorFile, this.contextFactory) : "";
                        var fontSchemeUrl = object.FontFile ? Helpers.GetUrlWithoutTokens(object.FontFile, this.contextFactory) : "";
                        var backgroundImageUrl = object.BackgroundFile ? Helpers.GetUrlWithoutTokens(object.BackgroundFile, this.contextFactory) : null;
                        web.applyTheme(colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, true);
                        web.update();
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Warning(_this.name, "Code execution scope ended, but not all values loaded");
                            def.resolve();
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Code execution scope ended");
                            Core.Log.Information(_this.name, args.get_message());
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    ComposedLook.prototype.ReadObjects = function (object) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        object = new Core.Schema.ComposedLook();
                        var def = jQuery.Deferred();
                        var clientContext = this.contextFactory.ClientContext;
                        var web = this.contextFactory.Web;
                        var theme = web.get_themeInfo();
                        clientContext.load(theme);
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information(_this.name, "Code execution scope ended");
                            object.BackgroundFile = theme.get_themeBackgroundImageUri();
                            object.Name = theme.get_accessibleDescription();
                            object.Version = 0; //= theme.get_objectVersion();
                            Core.Log.Information(_this.name, "Missing properties");
                            def.resolve(object);
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Reading failed");
                            Core.Log.Error(_this.name, args.get_message());
                            def.resolve(object);
                        });
                        return def;
                    };
                    return ComposedLook;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.ComposedLook = ComposedLook;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var ContentTypes = (function (_super) {
                    __extends(ContentTypes, _super);
                    function ContentTypes() {
                        _super.call(this, "ContentTypes");
                    }
                    ContentTypes.prototype.ProvisionObjects = function (object) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        var web = this.contextFactory.Web;
                        var context = this.contextFactory.ClientContext;
                        context.load(web.get_contentTypes(), 'IncludeWithDefaultProperties(StringId,FieldLinks)');
                        context.load(web.get_fields(), 'IncludeWithDefaultProperties(Id)');
                        context.executeQueryAsync(function () {
                            var existingCTs = web.get_contentTypes();
                            var existingFields = web.get_fields();
                            var enumer = existingCTs.getEnumerator();
                            while (enumer.moveNext()) {
                                var ct = enumer.get_current();
                            }
                            Core.Log.Information(_this.name, "Code execution scope ended");
                            def.resolve();
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Code execution scope ended");
                            Core.Log.Information(_this.name, args.get_message());
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    ContentTypes.prototype.ReadObjects = function (object) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        object = [];
                        var def = jQuery.Deferred();
                        var web = this.contextFactory.Web;
                        var context = this.contextFactory.ClientContext;
                        var existingCTs = web.get_contentTypes();
                        var existingFields = web.get_fields();
                        context.load(existingCTs, 'IncludeWithDefaultProperties(StringId,FieldLinks)');
                        context.executeQueryAsync(function () {
                            var enumer = existingCTs.getEnumerator();
                            while (enumer.moveNext()) {
                                var ct = enumer.get_current();
                                if (!Core.Enums.BuiltInContentTypeId.Contains(ct.get_id().toString())) {
                                    var newct = new Core.Schema.ContentType();
                                    newct.Name = ct.get_name();
                                    newct.Group = ct.get_group();
                                    newct.Description = ct.get_description();
                                    newct.Group = ct.get_group();
                                    newct.Hidden = ct.get_hidden();
                                    newct.ID = ct.get_id().toString();
                                    newct.DisplayFormUrl = ct.get_displayFormUrl();
                                    newct.EditFormUrl = ct.get_editFormUrl();
                                    newct.NewFormUrl = ct.get_newFormUrl();
                                    newct.ReadOnly = ct.get_readOnly();
                                    newct.Sealed = ct.get_sealed();
                                    var enumfieldref = ct.get_fieldLinks().getEnumerator();
                                    var fieldrefs = [];
                                    while (enumfieldref.moveNext()) {
                                        var fieldlink = enumfieldref.get_current();
                                        var fieldref = new Core.Schema.ListInstanceFieldRef();
                                        fieldref.Name = fieldlink.get_name();
                                        fieldrefs.push(fieldref);
                                    }
                                    newct.FieldRefs = fieldrefs;
                                    object.push(newct);
                                }
                            }
                            Core.Log.Information(_this.name, "Code execution scope ended");
                            def.resolve(object);
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Reading failed");
                            Core.Log.Error(_this.name, args.get_message());
                            def.resolve(object);
                        });
                        return def.promise();
                    };
                    return ContentTypes;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.ContentTypes = ContentTypes;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var CustomAction = (function () {
                    function CustomAction() {
                    }
                    return CustomAction;
                })();
                Schema.CustomAction = CustomAction;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Contents = (function () {
                    function Contents() {
                    }
                    return Contents;
                })();
                Schema.Contents = Contents;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="IContents.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var WebPart = (function () {
                    function WebPart() {
                    }
                    return WebPart;
                })();
                Schema.WebPart = WebPart;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\ICustomAction.ts" />
/// <reference path="..\schema\IWebPart.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var CustomActions = (function (_super) {
                    __extends(CustomActions, _super);
                    function CustomActions() {
                        _super.call(this, "CustomActions");
                    }
                    CustomActions.prototype.ProvisionObjects = function (objects) {
                        var _this = this;
                        var def = jQuery.Deferred();
                        Core.Log.Information(this.name, "Starting provisioning of objects");
                        var clientContext = this.contextFactory.ClientContext;
                        var userCustomActions = this.contextFactory.Web.get_userCustomActions();
                        clientContext.load(userCustomActions);
                        clientContext.executeQueryAsync(function () {
                            objects.forEach(function (obj) {
                                var objExists = jQuery.grep(userCustomActions.get_data(), function (userCustomAction) {
                                    return userCustomAction.get_title() == obj.Title;
                                }).length > 0;
                                if (objExists) {
                                    Core.Log.Information(_this.name, "A custom action with Title '" + obj.Title + "' already exists in this Web site at Url '" + obj.Url + "'.");
                                }
                                else {
                                    Core.Log.Information(_this.name, "Creating custom action with Title '" + obj.Title + "'");
                                    var objCreationInformation = userCustomActions.add();
                                    if (obj.Description) {
                                        objCreationInformation.set_description(obj.Description);
                                    }
                                    if (obj.CommandUIExtension) {
                                        objCreationInformation.set_commandUIExtension(obj.CommandUIExtension);
                                    }
                                    if (obj.Group) {
                                        objCreationInformation.set_group(obj.Group);
                                    }
                                    if (obj.Title) {
                                        objCreationInformation.set_title(obj.Title);
                                    }
                                    if (obj.Url) {
                                        objCreationInformation.set_url(obj.Url);
                                    }
                                    if (obj.ScriptBlock) {
                                        objCreationInformation.set_scriptBlock(obj.ScriptBlock);
                                    }
                                    if (obj.ScriptSrc) {
                                        objCreationInformation.set_scriptSrc(obj.ScriptSrc);
                                    }
                                    if (obj.Location) {
                                        objCreationInformation.set_location(obj.Location);
                                    }
                                    if (obj.ImageUrl) {
                                        objCreationInformation.set_imageUrl(obj.ImageUrl);
                                    }
                                    if (obj.Name) {
                                        objCreationInformation.set_name(obj.Name);
                                    }
                                    if (obj.RegistrationId) {
                                        objCreationInformation.set_registrationId(obj.RegistrationId);
                                    }
                                    if (obj.RegistrationType) {
                                        objCreationInformation.set_registrationType(obj.RegistrationType);
                                    }
                                    if (obj.Rights) {
                                        objCreationInformation.set_rights(obj.Rights);
                                    }
                                    if (obj.Sequence) {
                                        objCreationInformation.set_sequence(obj.Sequence);
                                    }
                                    objCreationInformation.update();
                                }
                            });
                            if (!clientContext.get_hasPendingRequest()) {
                                Core.Log.Information(_this.name, "Provisioning of objects ended");
                                def.resolve();
                                return def.promise();
                            }
                            clientContext.executeQueryAsync(function () {
                                Core.Log.Information(_this.name, "Provisioning of objects ended");
                                def.resolve();
                            }, function (sender, args) {
                                Core.Log.Information(_this.name, "Provisioning of objects failed");
                                Core.Log.Error(_this.name, "" + args.get_message());
                                def.resolve(sender, args);
                            });
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Provisioning of objects failed");
                            Core.Log.Error(_this.name, "" + args.get_message());
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    CustomActions.prototype.ReadObjects = function (object) {
                        var _this = this;
                        var def = jQuery.Deferred();
                        Core.Log.Information(this.name, "Starting reading of objects");
                        var clientContext = this.contextFactory.ClientContext;
                        var userCustomActions = this.contextFactory.Web.get_userCustomActions();
                        var usersiteCustomActions = clientContext.get_site().get_userCustomActions();
                        var usercustomActionInstances = [];
                        var usersitecustomActionInstances = [];
                        object = new Core.Schema.CustomActions();
                        clientContext.load(userCustomActions);
                        clientContext.load(usersiteCustomActions);
                        clientContext.executeQueryAsync(function () {
                            var listEnumerator = userCustomActions.getEnumerator();
                            var i = 0;
                            while (listEnumerator.moveNext()) {
                                var action = listEnumerator.get_current();
                                var ac = new Core.Schema.CustomAction();
                                ac.Location = action.get_location();
                                ac.Description = action.get_description();
                                ac.CommandUIExtension = action.get_commandUIExtension();
                                ac.Group = action.get_group();
                                ac.ImageUrl = action.get_imageUrl();
                                ac.Name = action.get_name();
                                ac.RegistrationId = action.get_registrationId();
                                ac.RegistrationType = action.get_registrationType();
                                ac.ScriptBlock = action.get_scriptBlock();
                                ac.Rights = action.get_rights();
                                ac.ScriptSrc = action.get_scriptSrc();
                                ac.Sequence = action.get_sequence();
                                ac.Title = action.get_title();
                                ac.Url = action.get_url();
                                usercustomActionInstances.push(ac);
                                i++;
                            }
                            var listEnumerator = usersiteCustomActions.getEnumerator();
                            var i = 0;
                            while (listEnumerator.moveNext()) {
                                var action = listEnumerator.get_current();
                                var ac = new Core.Schema.CustomAction();
                                ac.Location = action.get_location();
                                ac.Description = action.get_description();
                                ac.CommandUIExtension = action.get_commandUIExtension();
                                ac.Group = action.get_group();
                                ac.ImageUrl = action.get_imageUrl();
                                ac.Name = action.get_name();
                                ac.RegistrationId = action.get_registrationId();
                                ac.RegistrationType = action.get_registrationType();
                                ac.ScriptBlock = action.get_scriptBlock();
                                ac.Rights = action.get_rights();
                                ac.ScriptSrc = action.get_scriptSrc();
                                ac.Sequence = action.get_sequence();
                                ac.Title = action.get_title();
                                ac.Url = action.get_url();
                                usersitecustomActionInstances.push(ac);
                                i++;
                            }
                            object.SiteCustomActions = usersitecustomActionInstances;
                            object.WebCustomActions = usercustomActionInstances;
                            Core.Log.Information(_this.name, "Starting reading of objects ended");
                            def.resolve(object);
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Reading failed");
                            Core.Log.Error(_this.name, args.get_message());
                            def.resolve(object);
                        });
                        return def.promise();
                    };
                    return CustomActions;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.CustomActions = CustomActions;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var Features = (function (_super) {
                    __extends(Features, _super);
                    function Features() {
                        _super.call(this, "Features");
                    }
                    Features.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    Features.prototype.ReadObjects = function (object) {
                        var _this = this;
                        var def = jQuery.Deferred();
                        Core.Log.Information(this.name, "Starting reading of objects");
                        var clientContext = this.contextFactory.ClientContext;
                        var webfeatures = this.contextFactory.Web.get_features();
                        var sitefeatures = clientContext.get_site().get_features();
                        var siteFeaturesInstance = [];
                        var webFeaturesInstance = [];
                        object = new Core.Schema.Features();
                        clientContext.load(webfeatures);
                        clientContext.load(sitefeatures);
                        clientContext.executeQueryAsync(function () {
                            var listEnumerator = webfeatures.getEnumerator();
                            while (listEnumerator.moveNext()) {
                                var feature = listEnumerator.get_current();
                                var f = new Core.Schema.Feature();
                                f.ID = feature.get_definitionId().toString();
                                f.Deactivate = false;
                                webFeaturesInstance.push(f);
                            }
                            var listEnumerator = sitefeatures.getEnumerator();
                            while (listEnumerator.moveNext()) {
                                var feature = listEnumerator.get_current();
                                var f = new Core.Schema.Feature();
                                f.ID = feature.get_definitionId().toString();
                                f.Deactivate = false;
                                siteFeaturesInstance.push(f);
                            }
                            object.SiteFeatures = siteFeaturesInstance;
                            object.WebFeatures = webFeaturesInstance;
                            Core.Log.Information(_this.name, "Reading of objects ended");
                            def.resolve(object);
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Reading failed");
                            Core.Log.Error(_this.name, args.get_message());
                            def.resolve(object);
                        });
                        return def.promise();
                    };
                    return Features;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.Features = Features;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var HiddenView = (function () {
                    function HiddenView() {
                    }
                    return HiddenView;
                })();
                Schema.HiddenView = HiddenView;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="IWebPart.ts" />
/// <reference path="IHiddenView.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var File = (function () {
                    function File() {
                    }
                    return File;
                })();
                Schema.File = File;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IFile.ts" />
/// <reference path="..\schema\IWebPart.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var Helpers;
                (function (Helpers) {
                    function GetFileUrlWithoutTokens(fileUrl, factory) {
                        return fileUrl.replace(/{resources}/g, factory.siteServerRelativeUrl + "/resources")
                            .replace(/{webpartgallery}/g, factory.siteServerRelativeUrl + "/_catalogs/wp");
                    }
                    Helpers.GetFileUrlWithoutTokens = GetFileUrlWithoutTokens;
                    function GetWebPartXmlWithoutTokens(xml, factory) {
                        return xml.replace(/{site}/g, factory.webServerRelativeUrl)
                            .replace(/{sitecollection}/g, factory.siteServerRelativeUrl);
                    }
                    Helpers.GetWebPartXmlWithoutTokens = GetWebPartXmlWithoutTokens;
                    function GetFolderFromFilePath(filePath) {
                        var split = filePath.split("/");
                        return split.splice(0, split.length - 1).join("/");
                    }
                    Helpers.GetFolderFromFilePath = GetFolderFromFilePath;
                    function GetFilenameFromFilePath(filePath) {
                        var split = filePath.split("/");
                        return split[split.length - 1];
                    }
                    Helpers.GetFilenameFromFilePath = GetFilenameFromFilePath;
                    function LastItemInArray(array) {
                        return array[array.length - 1];
                    }
                    Helpers.LastItemInArray = LastItemInArray;
                })(Helpers || (Helpers = {}));
                function AddFileByUrl(dest, src, overwrite, contextFactory) {
                    var def = jQuery.Deferred();
                    Core.Log.Information("Files", "Creating file with Url '" + dest + "'");
                    var clientContext = contextFactory.ClientContext;
                    var web = contextFactory.Web;
                    var sourceFile = Helpers.GetFileUrlWithoutTokens(src, contextFactory);
                    var destFolder = Helpers.GetFolderFromFilePath(dest);
                    var destFileName = Helpers.GetFilenameFromFilePath(dest);
                    var folderServerRelativeUrl = contextFactory.webServerRelativeUrl + "/" + destFolder;
                    var folder = web.getFolderByServerRelativeUrl(folderServerRelativeUrl);
                    jQuery.get(sourceFile, function (fileContent) {
                        var objCreationInformation = new SP.FileCreationInformation();
                        objCreationInformation.set_overwrite(overwrite);
                        objCreationInformation.set_url(destFileName);
                        objCreationInformation.set_content(new SP.Base64EncodedByteArray());
                        for (var i = 0; i < fileContent.length; i++) {
                            objCreationInformation.get_content().append(fileContent.charCodeAt(i));
                        }
                        clientContext.load(folder.get_files().add(objCreationInformation));
                        clientContext.executeQueryAsync(function () {
                            def.resolve();
                        }, function (sender, args) {
                            Core.Log.Information("Files", "Failed to create file with Url '" + dest + "'");
                            Core.Log.Error("Files", "" + args.get_message());
                            def.resolve(sender, args);
                        });
                    });
                    return def.promise();
                }
                function RemoveWebPartsFromFileIfSpecified(clientContext, limitedWebPartManager, shouldRemoveExisting) {
                    var def = jQuery.Deferred();
                    if (!shouldRemoveExisting) {
                        def.resolve();
                        return def.promise();
                    }
                    var existingWebParts = limitedWebPartManager.get_webParts();
                    clientContext.load(existingWebParts);
                    clientContext.executeQueryAsync(function () {
                        existingWebParts.get_data().forEach(function (wp) {
                            wp.deleteWebPart();
                        });
                        clientContext.load(existingWebParts);
                        clientContext.executeQueryAsync(function () {
                            def.resolve();
                        }, function () {
                            def.resolve();
                        });
                    }, function () {
                        def.resolve();
                    });
                    return def.promise();
                }
                function GetWebPartXml(webParts) {
                    var _this = this;
                    var def = jQuery.Deferred();
                    var promises = [];
                    webParts.forEach(function (wp, index) {
                        if (wp.Contents.FileUrl) {
                            promises.push((function () {
                                var def = jQuery.Deferred();
                                var fileUrl = Helpers.GetFileUrlWithoutTokens(wp.Contents.FileUrl, _this.cfact);
                                jQuery.get(fileUrl, function (xml) {
                                    webParts[index].Contents.Xml = xml;
                                    def.resolve();
                                }).fail(function (sender, args) {
                                    def.resolve(sender, args);
                                });
                                return def.promise();
                            })());
                        }
                    });
                    jQuery.when.apply(jQuery, promises).done(function () {
                        def.resolve(webParts);
                    });
                    return def.promise();
                }
                function AddWebPartsToWebPartPage(dest, src, webParts, shouldRemoveExisting, contextFactory) {
                    var def = jQuery.Deferred();
                    var clientContext = contextFactory.ClientContext;
                    var web = contextFactory.Web;
                    var fileUrl = Helpers.LastItemInArray(src.split("/"));
                    var fileServerRelativeUrl = contextFactory.webServerRelativeUrl + "/" + dest;
                    var file = web.getFileByServerRelativeUrl(fileServerRelativeUrl);
                    clientContext.load(file);
                    clientContext.executeQueryAsync(function () {
                        var limitedWebPartManager = file.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
                        RemoveWebPartsFromFileIfSpecified(clientContext, limitedWebPartManager, shouldRemoveExisting).then(function () {
                            GetWebPartXml(webParts).then(function (webParts) {
                                webParts.forEach(function (wp) {
                                    if (!wp.Contents.Xml)
                                        return;
                                    Core.Log.Information("Files Web Parts", "Adding web part '" + wp.Title + "' to zone '" + wp.Zone + "' for file with URL '" + dest + "'");
                                    var oWebPartDefinition = limitedWebPartManager.importWebPart(Helpers.GetWebPartXmlWithoutTokens(wp.Contents.Xml, contextFactory));
                                    var oWebPart = oWebPartDefinition.get_webPart();
                                    limitedWebPartManager.addWebPart(oWebPart, wp.Zone, wp.Order);
                                });
                                clientContext.executeQueryAsync(function () {
                                    def.resolve();
                                }, function (sender, args) {
                                    Core.Log.Information("Files Web Parts", "Provisioning of objects failed for file with Url '" + fileUrl + "'");
                                    Core.Log.Error("Files Web Parts", "" + args.get_message());
                                    def.resolve(sender, args);
                                });
                            });
                        });
                    }, function (sender, args) {
                        Core.Log.Information("Files Web Parts", "Provisioning of objects failed for file with Url '" + fileUrl + "'");
                        Core.Log.Error("Files Web Parts", "" + args.get_message());
                        def.resolve(sender, args);
                    });
                    return def.promise();
                }
                function ApplyFileProperties(dest, fileProperties, contextFactory) {
                    var def = jQuery.Deferred();
                    var clientContext = contextFactory.ClientContext;
                    var web = contextFactory.Web;
                    var fileServerRelativeUrl = contextFactory.webServerRelativeUrl + "/" + dest;
                    var file = web.getFileByServerRelativeUrl(fileServerRelativeUrl);
                    var listItemAllFields = file.get_listItemAllFields();
                    Core.Log.Information("Files Properties", "Setting properties for file with URL '" + dest + "'");
                    for (var key in fileProperties) {
                        Core.Log.Information("Files Properties", "Setting property '" + key + "' = '" + fileProperties[key] + "' for file with URL '" + dest + "'");
                        listItemAllFields.set_item(key, fileProperties[key]);
                    }
                    listItemAllFields.update();
                    clientContext.executeQueryAsync(function () {
                        def.resolve();
                    }, function (sender, args) {
                        Core.Log.Information("Files Properties", "Provisioning of objects failed for file with Url '" + dest + "'");
                        Core.Log.Error("Files Properties", "" + args.get_message());
                        def.resolve(sender, args);
                    });
                    return def.promise();
                }
                function GetViewFromCollectionByUrl(viewCollection, url, contextFactory) {
                    var serverRelativeUrl = contextFactory.webServerRelativeUrl + "/" + url;
                    var viewCollectionEnumerator = viewCollection.getEnumerator();
                    while (viewCollectionEnumerator.moveNext()) {
                        var view = viewCollectionEnumerator.get_current();
                        if (view.get_serverRelativeUrl().toString().toLowerCase() === serverRelativeUrl.toLowerCase()) {
                            return view;
                        }
                    }
                    return null;
                }
                function ModifyHiddenViews(objects, contextFactory) {
                    Core.Log.Information("Hidden Views", "Code execution scope started");
                    var def = jQuery.Deferred();
                    var clientContext = contextFactory.ClientContext;
                    var web = contextFactory.Web;
                    var mapping = {};
                    var lists = [];
                    var listViewCollections = [];
                    objects.forEach(function (obj) {
                        if (!obj.Views)
                            return;
                        obj.Views.forEach(function (v) {
                            mapping[v.List] = mapping[v.List] || [];
                            mapping[v.List].push(jQuery.extend(v, { "Url": obj.Folder }));
                        });
                    });
                    Object.keys(mapping).forEach(function (l, index) {
                        lists.push(web.get_lists().getByTitle(l));
                        listViewCollections.push(web.get_lists().getByTitle(l).get_views());
                        clientContext.load(lists[index]);
                        clientContext.load(listViewCollections[index]);
                    });
                    clientContext.executeQueryAsync(function () {
                        Object.keys(mapping).forEach(function (l, index) {
                            Core.Log.Information("Hidden Views", "Modifying list views for list '" + l + "'");
                            var views = mapping[l];
                            var list = lists[index];
                            var viewCollection = listViewCollections[index];
                            views.forEach(function (v) {
                                var view = GetViewFromCollectionByUrl(viewCollection, v.Url, contextFactory);
                                if (view == null)
                                    return;
                                Core.Log.Information("Hidden Views", "Modifying list view with Url '" + v.Url + "' for list '" + l + "'");
                                if (v.Paged) {
                                    view.set_paged(v.Paged);
                                }
                                if (v.Query) {
                                    view.set_viewQuery(v.Query);
                                }
                                if (v.RowLimit) {
                                    view.set_rowLimit(v.RowLimit);
                                }
                                if (v.ViewFields && v.ViewFields.length > 0) {
                                    var columns = view.get_viewFields();
                                    columns.removeAll();
                                    v.ViewFields.forEach(function (vf) {
                                        columns.add(vf);
                                    });
                                }
                                view.update();
                            });
                            clientContext.load(viewCollection);
                            list.update();
                        });
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information("Hidden Views", "Code execution scope ended");
                            def.resolve();
                        }, function (sender, args) {
                            Core.Log.Error("Hidden Views", "Error: " + args.get_message());
                            Core.Log.Information("Hidden Views", "Code execution scope ended");
                            def.resolve(sender, args);
                        });
                    }, function (sender, args) {
                        Core.Log.Error("Hidden Views", "Error: " + args.get_message());
                        Core.Log.Information("Hidden Views", "Code execution scope ended");
                        def.resolve(sender, args);
                    });
                    return def.promise();
                }
                var Files = (function (_super) {
                    __extends(Files, _super);
                    function Files() {
                        _super.call(this, "Files");
                    }
                    Files.prototype.ProvisionObjects = function (objects) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        var clientContext = this.contextFactory.ClientContext;
                        var promises = [];
                        objects.forEach(function (obj) {
                            AddFileByUrl(obj.Folder, obj.Src, obj.Overwrite, this.contextFactory);
                        });
                        jQuery.when.apply(jQuery, promises).done(function () {
                            var promises = [];
                            objects.forEach(function (obj) {
                                if (obj.WebParts && obj.WebParts.length > 0) {
                                    promises.push(AddWebPartsToWebPartPage(obj.Folder, obj.Src, obj.WebParts, obj.RemoveExistingWebParts, _this.contextFactory));
                                }
                            });
                            jQuery.when.apply(jQuery, promises).done(function () {
                                var promises = [];
                                objects.forEach(function (obj) {
                                    if (obj.Properties && Object.keys(obj.Properties).length > 0) {
                                        promises.push(ApplyFileProperties(obj.Folder, obj.Properties, _this.contextFactory));
                                    }
                                });
                                jQuery.when.apply(jQuery, promises).done(function () {
                                    ModifyHiddenViews(objects, _this.contextFactory).then(function () {
                                        Core.Log.Information(_this.name, "Code execution scope ended");
                                        def.resolve();
                                    });
                                });
                            });
                        });
                        return def.promise();
                    };
                    Files.prototype.ReadObjects = function (objects) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        objects = [];
                        Core.Log.Warning(this.name, "Files cannot read");
                        def.resolve(objects);
                        return def.promise();
                    };
                    return Files;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.Files = Files;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/*

[
    {
      "Dest": "SitePages/Homepage.aspx",
      "Overwrite": true,
      "Src": "{resources}/SitePages/Homepage.txt",
      "RemoveExistingWebParts": true,
      "Properties": {
        "ContentTypeId": "0x010109010092214CADC5FC4262A177C632F516412E"
      },
      "WebParts": [
        {
          "Title": "Image Viewer",
          "Zone": "LeftColumn",
          "Order": 0,
          "Contents": {
            "Xml": "<?xml version=\"1.0\" encoding=\"utf-8\"?><WebPart xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://schemas.microsoft.com/WebPart/v2\"><Title>Image Viewer</Title><FrameType>None</FrameType><Assembly>Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c</Assembly><TypeName>Microsoft.SharePoint.WebPartPages.ImageWebPart</TypeName><ImageLink xmlns=\"http://schemas.microsoft.com/WebPart/v2/Image\" /><AlternativeText xmlns=\"http://schemas.microsoft.com/WebPart/v2/Image\" /><VerticalAlignment xmlns=\"http://schemas.microsoft.com/WebPart/v2/Image\">Middle</VerticalAlignment><HorizontalAlignment xmlns=\"http://schemas.microsoft.com/WebPart/v2/Image\">Center</HorizontalAlignment><BackgroundColor xmlns=\"http://schemas.microsoft.com/WebPart/v2/Image\">transparent</BackgroundColor></WebPart>"
          }
        },
        {
          "Title": "SiteFeed",
          "Zone": "LeftColumn",
          "Order": 1,
          "Contents": {
            "FileUrl": "{webpartgallery}/SiteFeed.dwp"
          }
        },
        {
          "Title": "MyWebPart",
          "Zone": "RightColumn",
          "Order": 0,
          "Contents": {
            "FileUrl": "{resources}/WebParts/MyWebPart.txt"
          }
        }
      ]
    }
  ]
*/ 
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var ContentTypeBinding = (function () {
                    function ContentTypeBinding() {
                    }
                    return ContentTypeBinding;
                })();
                Schema.ContentTypeBinding = ContentTypeBinding;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Folder = (function () {
                    function Folder() {
                    }
                    return Folder;
                })();
                Schema.Folder = Folder;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var RoleDefinition = (function () {
                    function RoleDefinition() {
                    }
                    return RoleDefinition;
                })();
                Schema.RoleDefinition = RoleDefinition;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var RoleAssignment = (function () {
                    function RoleAssignment() {
                    }
                    return RoleAssignment;
                })();
                Schema.RoleAssignment = RoleAssignment;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var User = (function () {
                    function User() {
                    }
                    return User;
                })();
                Schema.User = User;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var SiteGroup = (function () {
                    function SiteGroup() {
                    }
                    return SiteGroup;
                })();
                Schema.SiteGroup = SiteGroup;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="IRoleDefinition.ts" />
/// <reference path="IRoleAssignment.ts" />
/// <reference path="IUser.ts" />
/// <reference path="ISiteGroup.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Security = (function () {
                    function Security() {
                    }
                    return Security;
                })();
                Schema.Security = Security;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var View = (function () {
                    function View() {
                    }
                    return View;
                })();
                Schema.View = View;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="IContentTypeBinding.ts" />
/// <reference path="IFolder.ts" />
/// <reference path="ISecurity.ts" />
/// <reference path="IView.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var ListInstance = (function () {
                    function ListInstance() {
                    }
                    return ListInstance;
                })();
                Schema.ListInstance = ListInstance;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IListInstance.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                function EnsureLocationBasedMetadataDefaultsReceiver(clientContext, list) {
                    var receiverName = "LocationBasedMetadataDefaultsReceiver ItemAdded";
                    var def = jQuery.Deferred();
                    var eventReceivers = list.get_eventReceivers();
                    Core.Log.Information("Lists Event Receivers", "Adding eventreceiver '" + receiverName + "' to list '" + list.get_title() + "'");
                    var eventRecCreationInfo = new SP.EventReceiverDefinitionCreationInformation();
                    eventRecCreationInfo.set_receiverName(receiverName);
                    eventRecCreationInfo.set_synchronization(1);
                    eventRecCreationInfo.set_sequenceNumber(1000);
                    eventRecCreationInfo.set_receiverAssembly('Microsoft.Office.DocumentManagement, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c');
                    eventRecCreationInfo.set_receiverClass('Microsoft.Office.DocumentManagement.LocationBasedMetadataDefaultsReceiver');
                    eventRecCreationInfo.set_eventType(SP.EventReceiverType.itemAdded);
                    eventReceivers.add(eventRecCreationInfo);
                    list.update();
                    clientContext.executeQueryAsync(function () {
                        def.resolve();
                    }, function (sender, args) {
                        def.resolve(sender, args);
                    });
                    return def.promise();
                }
                function CreateFolders(clientContext, list, listUrl, folders, contextFactory) {
                    Core.Log.Information("Lists Folders", "Code execution scope started");
                    var def = jQuery.Deferred();
                    var listRelativeUrl = contextFactory.webServerRelativeUrl + "/" + listUrl;
                    var rootFolder = clientContext.get_web().getFolderByServerRelativeUrl(listRelativeUrl);
                    var metadataDefaults = "<MetadataDefaults>";
                    var setMetadataDefaults = false;
                    folders.forEach(function (f) {
                        var folderUrl = listRelativeUrl + "/" + f.Name;
                        Core.Log.Information("Lists Folders", "Creating folder '" + folderUrl + "'");
                        rootFolder.get_folders().add(folderUrl);
                        if (f.DefaultValues) {
                            Core.Log.Information("Lists Folders", "Setting default metadata for folder '" + folderUrl + "'");
                            var keys = Object.keys(f.DefaultValues).length;
                            if (keys > 0) {
                                metadataDefaults += "<a href='" + listRelativeUrl + "/" + f.Name + "'>";
                                Object.keys(f.DefaultValues).forEach(function (key) { metadataDefaults += "<DefaultValue FieldName=\"" + key + "\">" + f.DefaultValues[key] + "</DefaultValue>"; });
                                metadataDefaults += "</a>";
                            }
                            setMetadataDefaults = true;
                        }
                    });
                    metadataDefaults += "</MetadataDefaults>";
                    if (setMetadataDefaults) {
                        var metadataDefaultsFileCreateInfo = new SP.FileCreationInformation();
                        metadataDefaultsFileCreateInfo.set_url(listRelativeUrl + "/Forms/client_LocationBasedDefaults.html");
                        metadataDefaultsFileCreateInfo.set_content(new SP.Base64EncodedByteArray());
                        metadataDefaultsFileCreateInfo.set_overwrite(true);
                        for (var i = 0; i < metadataDefaults.length; i++) {
                            metadataDefaultsFileCreateInfo.get_content().append(metadataDefaults.charCodeAt(i));
                        }
                        rootFolder.get_files().add(metadataDefaultsFileCreateInfo);
                        EnsureLocationBasedMetadataDefaultsReceiver(clientContext, list).then(function () {
                            clientContext.executeQueryAsync(function () {
                                def.resolve();
                            }, function (sender, args) {
                                def.resolve(sender, args);
                            });
                        });
                    }
                    else {
                        clientContext.executeQueryAsync(function () {
                            def.resolve();
                        }, function (sender, args) {
                            def.resolve(sender, args);
                        });
                    }
                    return def.promise();
                }
                ObjectHandlers.CreateFolders = CreateFolders;
                function ApplyContentTypeBindings(clientContext, lists, objects) {
                    Core.Log.Information("Lists Content Types", "Code execution scope started");
                    var def = jQuery.Deferred();
                    var webCts = clientContext.get_site().get_rootWeb().get_contentTypes();
                    lists.forEach(function (l, index) {
                        if (!objects[index].ContentTypeBindings)
                            return;
                        Core.Log.Information("Lists Content Types", "Enabled content types for list '" + l.get_title() + "'");
                        l.set_contentTypesEnabled(true);
                        l.update();
                    });
                    clientContext.load(webCts);
                    clientContext.executeQueryAsync(function () {
                        lists.forEach(function (l, index) {
                            var obj = objects[index];
                            if (!obj.ContentTypeBindings)
                                return;
                            obj.ContentTypeBindings.forEach(function (ctb) {
                                Core.Log.Information("Lists Content Types", "Adding content type '" + ctb.ContentTypeId + "' to list '" + l.get_title() + "'");
                                l.get_contentTypes().addExistingContentType(webCts.getById(ctb.ContentTypeId));
                            });
                            l.update();
                        });
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information("Lists Content Types", "Code execution scope ended");
                            def.resolve();
                        }, function (sender, args) {
                            Core.Log.Error("Lists Content Types", "Error: " + args.get_message());
                            Core.Log.Information("Lists Content Types", "Code execution scope ended");
                            def.resolve(sender, args);
                        });
                    }, function (sender, args) {
                        Core.Log.Error("Lists Content Types", "Error: " + args.get_message());
                        Core.Log.Information("Lists Content Types", "Code execution scope ended");
                        def.resolve(sender, args);
                    });
                    return def.promise();
                }
                ObjectHandlers.ApplyContentTypeBindings = ApplyContentTypeBindings;
                function ApplyListSecurity(clientContext, lists, objects) {
                    Core.Log.Information("Lists Security", "Code execution scope started");
                    var def = jQuery.Deferred();
                    lists.forEach(function (l, index) {
                        var obj = objects[index];
                        if (!obj.Security)
                            return;
                        if (obj.Security.BreakRoleInheritance) {
                            Core.Log.Information("Lists Security", "Breaking Role Inheritance for list '" + l.get_title() + "'. CopyRoleAssignments = '" + obj.Security.BreakRoleInheritance.CopyRoleAssignments + "', ClearSubscopes = '" + obj.Security.BreakRoleInheritance.ClearSubscopes + "'");
                            l.breakRoleInheritance(obj.Security.BreakRoleInheritance.CopyRoleAssignments, obj.Security.BreakRoleInheritance.ClearSubscopes);
                            l.update();
                            clientContext.load(l.get_roleAssignments());
                        }
                    });
                    var web = this.contextFactory.Web;
                    var allProperties = web.get_allProperties();
                    var siteGroups = web.get_siteGroups();
                    var roleDefinitions = web.get_roleDefinitions();
                    clientContext.load(allProperties);
                    clientContext.load(roleDefinitions);
                    clientContext.executeQueryAsync(function () {
                        lists.forEach(function (l, index) {
                            var obj = objects[index];
                            if (!obj.Security)
                                return;
                            obj.Security.Permissions.RoleAssignments.forEach(function (ra) {
                                var roleDef = null;
                                if (typeof ra.RoleDefinition == "number") {
                                    roleDef = roleDefinitions.getById(ra.RoleDefinition);
                                }
                                else {
                                    roleDef = roleDefinitions.getByName(ra.RoleDefinition);
                                }
                                var roleBindings = SP.RoleDefinitionBindingCollection.newObject(clientContext);
                                roleBindings.add(roleDef);
                                var principal = null;
                                if (ra.Principal.match(/\{[A-Za-z]*\}+/g)) {
                                    var token = ra.Principal.substring(1, ra.Principal.length - 1);
                                    var groupId = allProperties.get_fieldValues()[("vti_" + token)];
                                    principal = siteGroups.getById(groupId);
                                }
                                else {
                                    principal = siteGroups.getByName(principal);
                                }
                                l.get_roleAssignments().add(principal, roleBindings);
                            });
                            l.update();
                            Core.Log.Information("Lists Security", "Role assignments applied for list '" + l.get_title() + "'");
                        });
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information("Lists Security", "Code execution scope ended");
                            def.resolve();
                        }, function (sender, args) {
                            Core.Log.Error("Lists Security", "Error: " + args.get_message());
                            Core.Log.Information("Lists Security", "Code execution scope ended");
                            def.resolve(sender, args);
                        });
                    }, function (sender, args) {
                        Core.Log.Error("Lists Security", "Error: " + args.get_message());
                        Core.Log.Information("Lists Security", "Code execution scope ended");
                        def.resolve(sender, args);
                    });
                    return def.promise();
                }
                ObjectHandlers.ApplyListSecurity = ApplyListSecurity;
                function GetViewFromCollectionByUrl(viewCollection, url, contextFactory) {
                    var view = jQuery.grep(viewCollection.get_data(), function (v) {
                        return v.get_serverRelativeUrl() == contextFactory.siteServerRelativeUrl + "/" + url;
                    });
                    return view ? view[0] : null;
                }
                function CreateViews(clientContext, lists, objects) {
                    Core.Log.Information("Lists Views", "Code execution scope started");
                    var def = jQuery.Deferred();
                    var listViewCollections = [];
                    lists.forEach(function (l, index) {
                        listViewCollections.push(l.get_views());
                        clientContext.load(listViewCollections[index]);
                    });
                    clientContext.executeQueryAsync(function () {
                        lists.forEach(function (l, index) {
                            var obj = objects[index];
                            if (!obj.Views)
                                return;
                            listViewCollections.push(l.get_views());
                            clientContext.load(listViewCollections[index]);
                            obj.Views.forEach(function (v) {
                                var viewExists = jQuery.grep(listViewCollections[index].get_data(), function (ev) {
                                    return ev.get_title() == v.Title;
                                }).length > 0;
                                if (viewExists) {
                                    var view = listViewCollections[index].getByTitle(v.Title);
                                    Core.Log.Information("Lists Views", "Updating existing view '" + v.Title + "' for list '" + l.get_title() + "'");
                                    if (v.Paged) {
                                        view.set_paged(v.Paged);
                                    }
                                    if (v.Query) {
                                        view.set_viewQuery(v.Query);
                                    }
                                    if (v.RowLimit) {
                                        view.set_rowLimit(v.RowLimit);
                                    }
                                    if (v.ViewFields && v.ViewFields.length > 0) {
                                        var columns = view.get_viewFields();
                                        columns.removeAll();
                                        v.ViewFields.forEach(function (vf) {
                                            columns.add(vf);
                                        });
                                    }
                                    view.update();
                                }
                                else {
                                    Core.Log.Information("Lists Views", "Adding view '" + v.Title + "' to list '" + l.get_title() + "'");
                                    var viewCreationInformation = new SP.ViewCreationInformation();
                                    if (v.Title) {
                                        viewCreationInformation.set_title(v.Title);
                                    }
                                    if (v.PersonalView) {
                                        viewCreationInformation.set_personalView(v.PersonalView);
                                    }
                                    if (v.Paged) {
                                        viewCreationInformation.set_paged(v.Paged);
                                    }
                                    if (v.Query) {
                                        viewCreationInformation.set_query(v.Query);
                                    }
                                    if (v.RowLimit) {
                                        viewCreationInformation.set_rowLimit(v.RowLimit);
                                    }
                                    if (v.SetAsDefaultView) {
                                        viewCreationInformation.set_setAsDefaultView(v.SetAsDefaultView);
                                    }
                                    if (v.ViewFields) {
                                        viewCreationInformation.set_viewFields(v.ViewFields);
                                    }
                                    if (v.ViewTypeKind) {
                                        viewCreationInformation.set_viewTypeKind(SP.ViewType.html);
                                    }
                                    l.get_views().add(viewCreationInformation);
                                    l.update();
                                }
                                clientContext.load(l.get_views());
                            });
                        });
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information("Lists Views", "Code execution scope ended");
                            def.resolve();
                        }, function (sender, args) {
                            Core.Log.Error("Lists Views", "Error: " + args.get_message());
                            Core.Log.Information("Lists Views", "Code execution scope ended");
                            def.resolve(sender, args);
                        });
                    }, function (sender, args) {
                        Core.Log.Error("Lists Views", "Error: " + args.get_message());
                        Core.Log.Information("Lists Views", "Code execution scope ended");
                        def.resolve(sender, args);
                    });
                    return def.promise();
                }
                ObjectHandlers.CreateViews = CreateViews;
                var Lists = (function (_super) {
                    __extends(Lists, _super);
                    function Lists() {
                        _super.call(this, "Lists");
                    }
                    Lists.prototype.ProvisionObjects = function (objects) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        var clientContext = this.contextFactory.ClientContext;
                        var lists = clientContext.get_web().get_lists();
                        var listInstances = [];
                        clientContext.load(lists);
                        clientContext.executeQueryAsync(function () {
                            objects.forEach(function (obj, index) {
                                var existingObj = jQuery.grep(lists.get_data(), function (list) {
                                    return list.get_title() == obj.Title;
                                })[0];
                                if (existingObj) {
                                    Core.Log.Information(_this.name, "A list, survey, discussion board, or document library with the specified title '" + obj.Title + "' already exists in this Web site at Url '" + obj.Url + "'.");
                                    listInstances.push(existingObj);
                                    clientContext.load(listInstances[index]);
                                }
                                else {
                                    Core.Log.Information(_this.name, "Creating list with Title '" + obj.Title + "' and Url '" + obj.Url + "'.");
                                    var objCreationInformation = new SP.ListCreationInformation();
                                    if (obj.Description) {
                                        objCreationInformation.set_description(obj.Description);
                                    }
                                    if (obj.OnQuickLaunch) {
                                        objCreationInformation.set_quickLaunchOption(obj.OnQuickLaunch ? SP.QuickLaunchOptions.on : SP.QuickLaunchOptions.off);
                                    }
                                    if (obj.TemplateType) {
                                        objCreationInformation.set_templateType(obj.TemplateType);
                                    }
                                    if (obj.Title) {
                                        objCreationInformation.set_title(obj.Title);
                                    }
                                    if (obj.Url) {
                                        objCreationInformation.set_url(obj.Url);
                                    }
                                    listInstances.push(lists.add(objCreationInformation));
                                    clientContext.load(listInstances[index]);
                                }
                            });
                            if (!clientContext.get_hasPendingRequest()) {
                                Core.Log.Information(_this.name, "Code execution scope ended");
                                def.resolve();
                                return def.promise();
                            }
                            clientContext.executeQueryAsync(function () {
                                ApplyContentTypeBindings(clientContext, listInstances, objects).then(function () {
                                    CreateViews(clientContext, listInstances, objects).then(function () {
                                        ApplyListSecurity(clientContext, listInstances, objects).then(function () {
                                            var promises = [];
                                            objects.forEach(function (obj, index) {
                                                if (obj.Folders && obj.Folders.length > 0) {
                                                    promises.push(CreateFolders(clientContext, listInstances[index], obj.Url, obj.Folders, this.contextFactory));
                                                }
                                            });
                                            jQuery.when.apply(jQuery, promises).done(function () {
                                                clientContext.executeQueryAsync(function () {
                                                    Core.Log.Information(_this.name, "Code execution scope ended");
                                                    def.resolve();
                                                }, function (sender, args) {
                                                    Core.Log.Error(_this.name, "Error: " + args.get_message());
                                                    Core.Log.Information(_this.name, "Code execution scope ended");
                                                    def.resolve(sender, args);
                                                });
                                            });
                                        });
                                    });
                                });
                            }, function (sender, args) {
                                Core.Log.Error(_this.name, "Error: " + args.get_message());
                                Core.Log.Information(_this.name, "Code execution scope ended");
                                def.resolve(sender, args);
                            });
                        }, function (sender, args) {
                            Core.Log.Error(_this.name, "Error: " + args.get_message());
                            Core.Log.Information(_this.name, "Provisioning of objects failed");
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    Lists.prototype.ReadObjects = function (objects) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        objects = [];
                        var clientContext = this.contextFactory.ClientContext;
                        var lists = clientContext.get_web().get_lists();
                        var listInstances = [];
                        clientContext.load(lists);
                        clientContext.executeQueryAsync(function () {
                            var listEnumerator = lists.getEnumerator();
                            var i = 0;
                            while (listEnumerator.moveNext()) {
                                listInstances[i] = listEnumerator.get_current();
                                var list = new Core.Schema.ListInstance();
                                list.Title = listInstances[i].get_title();
                                list.TemplateType = listInstances[i].get_baseType();
                                list.FieldRefs = [];
                                objects.push(list);
                                clientContext.load(listInstances[i].get_contentTypes());
                                clientContext.load(listInstances[i].get_views());
                                clientContext.load(listInstances[i].get_roleAssignments());
                                clientContext.load(listInstances[i].get_rootFolder().get_folders());
                                clientContext.load(listInstances[i].get_contentTypes());
                                i++;
                            }
                            if (!clientContext.get_hasPendingRequest()) {
                                Core.Log.Information(_this.name, "Code execution scope ended");
                                def.resolve(objects);
                                return def.promise();
                            }
                            clientContext.executeQueryAsync(function () {
                                def.resolve(objects);
                            }, function (sender, args) {
                                Core.Log.Error(_this.name, "Error: " + args.get_message());
                                Core.Log.Information(_this.name, "Code execution scope ended");
                                def.resolve(sender, args);
                            });
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Reading failed");
                            Core.Log.Error(_this.name, args.get_message());
                            def.resolve(objects);
                        });
                        return def.promise();
                    };
                    return Lists;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.Lists = Lists;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/*
"Lists": [
    {
      "Title": "Internal Documents",
      "Url": "InternalDocuments",
      "TemplateType": 101,
      "Security": {
        "BreakRoleInheritance": true,
        "CopyRoleAssignments": true,
        "ClearSubscopes": true,
        "RoleAssignments": [
          {
            "Principal": "{associatevisitorgroup}",
            "RoleDefinition": 1073741826
          },
          {
            "Principal": "{associatemembergroup}",
            "RoleDefinition": "Contribute"
          },
          {
            "Principal": "{associateownergroup}",
            "RoleDefinition": "Full Control"
          }
        ]
      },
      "Folders": [
        {
          "Name": "Agenda",
          "DefaultValues": {
            "PortDocumentCategory": "-1;#Agenda|bdbd7af3-45ea-4993-a243-be91c0e5a6a8"
          }
        },
        {
          "Name": "Agreements",
          "DefaultValues": {
            "PortDocumentCategory": "-1;#Agreements|6689b4c-d2d0-43fa-b916-2e7698b8387d"
          }
        }
      ],
      "ContentTypeBindings": [
        {
          "ContentTypeId": "0x010100B3337B3CDC314FF2B8BC5F38977EDBF0"
        }
      ]
    }
  ],*/ 
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var NavigationNode = (function () {
                    function NavigationNode() {
                    }
                    return NavigationNode;
                })();
                Schema.NavigationNode = NavigationNode;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\INavigationNode.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var Helpers;
                (function (Helpers) {
                    function GetUrlWithoutTokens(url, factory) {
                        return url.replace("{Site}", factory.webAbsoluteUrl)
                            .replace("{SiteRelativeUrl}", factory.webServerRelativeUrl)
                            .replace("{SiteUrl}", factory.webAbsoluteUrl)
                            .replace("{SiteUrlEncoded}", encodeURIComponent(factory.webAbsoluteUrl))
                            .replace("{SiteCollection}", factory.siteAbsoluteUrl)
                            .replace("{SiteCollectionRelativeUrl}", factory.siteServerRelativeUrl)
                            .replace("{SiteCollectionEncoded}", encodeURIComponent(factory.siteAbsoluteUrl))
                            .replace("{WebApp}", window.location.protocol + "//" + window.location.host);
                    }
                    Helpers.GetUrlWithoutTokens = GetUrlWithoutTokens;
                    function GetNodeFromQuickLaunchByTitle(nodeCollection, title) {
                        var f = jQuery.grep(nodeCollection, function (val) {
                            return val.get_title() === title;
                        });
                        return f[0] || null;
                    }
                    Helpers.GetNodeFromQuickLaunchByTitle = GetNodeFromQuickLaunchByTitle;
                })(Helpers || (Helpers = {}));
                var LocalNavigation = (function (_super) {
                    __extends(LocalNavigation, _super);
                    function LocalNavigation() {
                        _super.call(this, "LocalNavigation");
                    }
                    LocalNavigation.prototype.ProvisionObjects = function (objects) {
                        var _this = this;
                        var def = jQuery.Deferred();
                        var clientContext = this.contextFactory.ClientContext;
                        var web = this.contextFactory.Web;
                        Core.Log.Information(this.name, "Starting provisioning of objects");
                        var navigation = web.get_navigation();
                        var quickLaunchNodeCollection = navigation.get_quickLaunch();
                        clientContext.load(quickLaunchNodeCollection);
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information(_this.name, "Removing existing navigation nodes");
                            var temporaryQuickLaunch = [];
                            var index = quickLaunchNodeCollection.get_count() - 1;
                            while (index >= 0) {
                                var oldNode = quickLaunchNodeCollection.itemAt(index);
                                temporaryQuickLaunch.push(oldNode);
                                oldNode.deleteObject();
                                index--;
                            }
                            clientContext.executeQueryAsync(function () {
                                objects.forEach(function (obj) {
                                    Core.Log.Information(_this.name, "Adding navigation node with Url '" + obj.Url + "' and Title '" + obj.Title + "'");
                                    var existingNode = Helpers.GetNodeFromQuickLaunchByTitle(temporaryQuickLaunch, obj.Title);
                                    var newNode = new SP.NavigationNodeCreationInformation();
                                    newNode.set_title(obj.Title);
                                    newNode.set_url(existingNode ? existingNode.get_url() : Helpers.GetUrlWithoutTokens(obj.Url, _this.contextFactory));
                                    newNode.set_asLastNode(true);
                                    quickLaunchNodeCollection.add(newNode);
                                });
                                clientContext.executeQueryAsync(function () {
                                    Core.Log.Information(_this.name, "Provisioning of objects ended");
                                    def.resolve();
                                }, function (sender, args) {
                                    Core.Log.Information(_this.name, "Provisioning of objects failed");
                                    Core.Log.Error(_this.name, "" + args.get_message());
                                    def.resolve(sender, args);
                                });
                            });
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Provisioning of objects failed");
                            Core.Log.Error(_this.name, "" + args.get_message());
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    LocalNavigation.prototype.ReadObjects = function (objects) {
                        var _this = this;
                        var def = jQuery.Deferred();
                        var clientContext = this.contextFactory.ClientContext;
                        var web = this.contextFactory.Web;
                        Core.Log.Information(this.name, "Starting reading of objects");
                        var navigation = web.get_navigation();
                        var quickLaunchNodeCollection = navigation.get_quickLaunch();
                        clientContext.load(navigation);
                        clientContext.load(quickLaunchNodeCollection);
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information(_this.name, "reading existing navigation nodes");
                            //var index = quickLaunchNodeCollection.get_count() - 1;
                            //while (index >= 0) {
                            //    const oldNode = quickLaunchNodeCollection.itemAt(index);
                            //    objects.push({ "Url": oldNode.get_url(), "Title": oldNode.get_title() });
                            //    index--;
                            //}
                            Core.Log.Information(_this.name, "reading of objects ended");
                            def.resolve(objects);
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Provisioning of objects failed");
                            Core.Log.Error(_this.name, "" + args.get_message());
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    return LocalNavigation;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.LocalNavigation = LocalNavigation;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="IWebPart.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Page = (function () {
                    function Page() {
                    }
                    return Page;
                })();
                Schema.Page = Page;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IPage.ts" />
/// <reference path="..\schema\IWebPart.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var Helpers;
                (function (Helpers) {
                    function GetWebPartXmlWithoutTokens(xml, factory) {
                        return xml.replace(/{site}/g, factory.webServerRelativeUrl)
                            .replace(/{sitecollection}/g, factory.siteServerRelativeUrl);
                    }
                    Helpers.GetWebPartXmlWithoutTokens = GetWebPartXmlWithoutTokens;
                    function GetFolderFromFilePath(filePath, factory) {
                        var split = filePath.split("/");
                        return split.splice(0, split.length - 1);
                    }
                    Helpers.GetFolderFromFilePath = GetFolderFromFilePath;
                })(Helpers || (Helpers = {}));
                function AddWikiPageByUrl(fileUrl, factory) {
                    var def = jQuery.Deferred();
                    Core.Log.Information("Pages", "Creating file with Url '" + fileUrl + "'");
                    var clientContext = this.contextFactory.ClientContext;
                    var web = this.contextFactory.Web;
                    var fileServerRelativeUrl = factory.webServerRelativeUrl + "/" + fileUrl;
                    var folderServerRelativeUrl = factory.webServerRelativeUrl + "/" + Helpers.GetFolderFromFilePath(fileUrl, factory);
                    var folder = web.getFolderByServerRelativeUrl(folderServerRelativeUrl);
                    clientContext.load(folder.get_files().addTemplateFile(fileServerRelativeUrl, SP.TemplateFileType.wikiPage));
                    clientContext.executeQueryAsync(function () {
                        def.resolve();
                    }, function (sender, args) {
                        Core.Log.Information("Pages", "Failed to create file with Url '" + fileUrl + "'");
                        Core.Log.Error("Pages", "" + args.get_message());
                        def.resolve(sender, args);
                    });
                    return def.promise();
                }
                ObjectHandlers.AddWikiPageByUrl = AddWikiPageByUrl;
                var Pages = (function (_super) {
                    __extends(Pages, _super);
                    function Pages() {
                        _super.call(this, "Pages");
                    }
                    Pages.prototype.ProvisionObjects = function (objects) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        var clientContext = this.contextFactory.ClientContext;
                        var promises = [];
                        objects.forEach(function (obj) {
                            AddWikiPageByUrl(obj.Url, _this.contextFactory);
                        });
                        jQuery.when.apply(jQuery, promises).done(function () {
                            Core.Log.Information(_this.name, "Code execution scope ended");
                            def.resolve();
                        });
                        return def.promise();
                    };
                    Pages.prototype.ReadObjects = function (objects) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        var clientContext = this.contextFactory.ClientContext;
                        objects = [];
                        var promises = [];
                        //TODO
                        jQuery.when.apply(jQuery, promises).done(function () {
                            Core.Log.Warning(_this.name, "cannot read");
                            def.resolve(objects);
                        });
                        return def.promise();
                    };
                    return Pages;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.Pages = Pages;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var PropertyBagEntries = (function (_super) {
                    __extends(PropertyBagEntries, _super);
                    function PropertyBagEntries() {
                        _super.call(this, "PropertyBagEntries");
                    }
                    PropertyBagEntries.prototype.ProvisionObjects = function (object) {
                        var _this = this;
                        Core.Log.Information(this.name, "Starting provisioning of objects");
                        var def = jQuery.Deferred();
                        var clientContext = this.contextFactory.ClientContext;
                        var web = this.contextFactory.Web;
                        var allProperties = web.get_allProperties();
                        for (var key in object) {
                            Core.Log.Information(this.name, "Setting property '" + key + "' = '" + object[key] + "' on web");
                            allProperties.set_item(key, object[key]);
                        }
                        web.update();
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information(_this.name, "Provisioning of objects ended");
                            def.resolve();
                        }, function (sender, args) {
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    PropertyBagEntries.prototype.ReadObjects = function (object) {
                        var _this = this;
                        var def = jQuery.Deferred();
                        var clientContext = this.contextFactory.ClientContext;
                        var web = this.contextFactory.Web;
                        var allProperties = web.get_allProperties();
                        object = {};
                        clientContext.load(allProperties);
                        clientContext.executeQueryAsync(function () {
                            var values = allProperties.get_fieldValues();
                            for (var key in values) {
                                object[key] = values[key];
                            }
                            Core.Log.Information(_this.name, "Read of objects ended");
                            def.resolve(object);
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Reading failed");
                            Core.Log.Error(_this.name, args.get_message());
                            def.resolve(object);
                        });
                        return def;
                    };
                    return PropertyBagEntries;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.PropertyBagEntries = PropertyBagEntries;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var Publishing = (function (_super) {
                    __extends(Publishing, _super);
                    function Publishing() {
                        _super.call(this, "Publishing");
                    }
                    Publishing.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    Publishing.prototype.ReadObjects = function (object) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        object = new Core.Schema.Publishing();
                        object.AvailableWebTemplates = [];
                        object.DesignPackage = null;
                        object.PageLayouts = [];
                        var clientContext = this.contextFactory.ClientContext;
                        var web = this.contextFactory.Web;
                        clientContext.load(web);
                        clientContext.executeQueryAsync(function () {
                            var templates = web.getAvailableWebTemplates(web.get_language(), false);
                            clientContext.load(templates);
                            clientContext.executeQueryAsync(function () {
                                var ienumerator = templates.getEnumerator();
                                while (ienumerator.moveNext()) {
                                    var t = ienumerator.get_current();
                                    var tpl = new Core.Schema.WebTemplate();
                                    tpl.ID = t.get_id().toString();
                                    tpl.Name = t.get_name();
                                    tpl.Description = t.get_description();
                                    tpl.IsHidden = t.get_isHidden();
                                    tpl.LCID = t.get_lcid();
                                    object.AvailableWebTemplates.push(tpl);
                                }
                                Core.Log.Information(_this.name, "Code execution scope ended");
                                Core.Log.Warning(_this.name, "DesignPackage and PageLayouts not supported");
                                def.resolve(object);
                            }, function (sender, args) {
                                Core.Log.Information(_this.name, "Reading failed");
                                Core.Log.Error(_this.name, args.get_message());
                                def.resolve(object);
                            });
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Reading failed");
                            Core.Log.Error(_this.name, args.get_message());
                            def.resolve(object);
                        });
                        def.resolve(object);
                        return def.promise();
                    };
                    return Publishing;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.Publishing = Publishing;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var RegionalSettings = (function (_super) {
                    __extends(RegionalSettings, _super);
                    function RegionalSettings() {
                        _super.call(this, "RegionalSettings");
                    }
                    RegionalSettings.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    RegionalSettings.prototype.ReadObjects = function (object) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        object = new Core.Schema.RegionalSettings();
                        var def = jQuery.Deferred();
                        var clientContext = this.contextFactory.ClientContext;
                        var web = this.contextFactory.Web;
                        var rsettings = web.get_regionalSettings();
                        var ts = web.get_regionalSettings().get_timeZone();
                        clientContext.load(rsettings);
                        clientContext.load(ts);
                        clientContext.executeQueryAsync(function () {
                            object.AdjustHijriDays = rsettings.get_adjustHijriDays();
                            object.AlternateCalendarType = rsettings.get_alternateCalendarType();
                            object.Collation = rsettings.get_collation();
                            object.FirstDayOfWeek = rsettings.get_firstDayOfWeek();
                            object.FirstWeekOfYear = rsettings.get_firstWeekOfYear();
                            object.LocaleId = rsettings.get_localeId();
                            object.ShowWeeks = rsettings.get_showWeeks();
                            object.Time24 = rsettings.get_time24();
                            object.TimeZone = ts.get_id();
                            object.WorkDayEndHour = rsettings.get_workDayEndHour();
                            object.WorkDays = rsettings.get_workDays();
                            object.WorkDayStartHour = rsettings.get_workDays();
                            Core.Log.Information(_this.name, "Code execution scope ended");
                            def.resolve(object);
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Reading failed");
                            Core.Log.Error(_this.name, args.get_message());
                            def.resolve(object);
                        });
                        return def.promise();
                    };
                    return RegionalSettings;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.RegionalSettings = RegionalSettings;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var SearchSettings = (function (_super) {
                    __extends(SearchSettings, _super);
                    function SearchSettings() {
                        _super.call(this, "SearchSettings");
                    }
                    SearchSettings.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    SearchSettings.prototype.ReadObjects = function (object) {
                        var def = jQuery.Deferred();
                        object = {};
                        Core.Log.Information(this.name, "Starting reading of objects");
                        Core.Log.Warning(this.name, "Search Schema cannot read via jsom");
                        def.resolve(object);
                        return def.promise(object);
                    };
                    return SearchSettings;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.SearchSettings = SearchSettings;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var Security = (function (_super) {
                    __extends(Security, _super);
                    function Security() {
                        _super.call(this, "Security");
                    }
                    Security.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    Security.prototype.ReadObjects = function (object) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        object = new Core.Schema.Security();
                        var def = jQuery.Deferred();
                        var clientContext = this.contextFactory.ClientContext;
                        var web = this.contextFactory.Web;
                        var mg = web.get_associatedMemberGroup().get_users();
                        var og = web.get_associatedOwnerGroup().get_users();
                        var vg = web.get_associatedVisitorGroup().get_users();
                        var siteusers = web.get_siteUsers();
                        var groups = web.get_siteGroups();
                        clientContext.load(web, "HasUniqueRoleAssignments");
                        clientContext.load(mg);
                        clientContext.load(og);
                        clientContext.load(vg);
                        clientContext.load(siteusers);
                        clientContext.load(groups);
                        clientContext.executeQueryAsync(function () {
                            object.AdditionalMembers = [];
                            object.AdditionalOwners = [];
                            object.AdditionalVisitors = [];
                            object.BreakRoleInheritance = new Core.Schema.BreakRoleInheritance();
                            object.BreakRoleInheritance.CopyRoleAssignments = !web.get_hasUniqueRoleAssignments();
                            object.Permissions = new Core.Schema.Permissions();
                            object.SiteGroups = [];
                            Core.Log.Information(_this.name, "Users not loaded");
                            Core.Log.Information(_this.name, "Code execution scope ended");
                            def.resolve(object);
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Reading failed");
                            Core.Log.Error(_this.name, args.get_message());
                            def.resolve(object);
                        });
                        return def.promise();
                    };
                    return Security;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.Security = Security;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var SiteFields = (function (_super) {
                    __extends(SiteFields, _super);
                    function SiteFields() {
                        _super.call(this, "SiteFields");
                    }
                    SiteFields.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    SiteFields.prototype.ReadObjects = function (objects) {
                        var _this = this;
                        var def = jQuery.Deferred();
                        Core.Log.Information(this.name, "Starting reading of objects");
                        var clientContext = this.contextFactory.ClientContext;
                        var fields = this.contextFactory.Web.get_fields();
                        var fieldsinstance = [];
                        objects = [];
                        clientContext.load(fields);
                        clientContext.executeQueryAsync(function () {
                            var listEnumerator = fields.getEnumerator();
                            while (listEnumerator.moveNext()) {
                                var field = listEnumerator.get_current();
                                if (!Core.Enums.BuiltInFieldId.Contains(field.get_id().toString())) {
                                    var f = new Core.Schema.Field();
                                    f.Name = field.get_internalName();
                                    f.SchemaXml = field.get_schemaXml();
                                    objects.push(f);
                                }
                            }
                            Core.Log.Information(_this.name, "Reading of objects ended");
                            def.resolve(objects);
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Reading failed");
                            Core.Log.Error(_this.name, args.get_message());
                            def.resolve(objects);
                        });
                        return def.promise();
                    };
                    return SiteFields;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.SiteFields = SiteFields;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var SitePolicy = (function (_super) {
                    __extends(SitePolicy, _super);
                    function SitePolicy() {
                        _super.call(this, "SitePolicy");
                    }
                    SitePolicy.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    SitePolicy.prototype.ReadObjects = function (object) {
                        var _this = this;
                        var def = jQuery.Deferred();
                        Core.Log.Information(this.name, "Starting reading of objects");
                        object = {};
                        var context = this.contextFactory.ClientContext;
                        var oWeb = this.contextFactory.Web;
                        var policies = SP.InformationPolicy.ProjectPolicy.getProjectPolicies(context, oWeb);
                        context.load(policies);
                        context.executeQueryAsync(function () {
                            var policyEnumerator = policies.getEnumerator();
                            var num = 0;
                            while (policyEnumerator.moveNext()) {
                                num++;
                            }
                            if (num == 0) {
                                def.resolve(object);
                            }
                            var testnum = 0;
                            policyEnumerator.reset();
                            while (policyEnumerator.moveNext()) {
                                var p = policyEnumerator.get_current();
                                SP.InformationPolicy.ProjectPolicy.applyProjectPolicy(context, oWeb, p);
                                context.executeQueryAsync(function () {
                                    testnum++;
                                    if (p) {
                                        object = p.get_name();
                                    }
                                    if (testnum == num) {
                                        Core.Log.Information(this.name, "Reading of objects ended");
                                        def.resolve(object);
                                    }
                                }, function (sender, args) {
                                    alert(args.get_message() + '\n' + args.get_stackTrace());
                                });
                            }
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Reading failed");
                            Core.Log.Error(_this.name, args.get_message());
                            def.resolve(object);
                        });
                        return def.promise();
                    };
                    return SitePolicy;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.SitePolicy = SitePolicy;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var SupportedUILanguages = (function (_super) {
                    __extends(SupportedUILanguages, _super);
                    function SupportedUILanguages() {
                        _super.call(this, "SupportedUILanguages");
                    }
                    SupportedUILanguages.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    SupportedUILanguages.prototype.ReadObjects = function (objects) {
                        var _this = this;
                        var def = jQuery.Deferred();
                        var clientContext = this.contextFactory.ClientContext;
                        var web = this.contextFactory.Web;
                        objects = [];
                        Core.Log.Information(this.name, "Starting reading of objects");
                        clientContext.load(web, 'SupportedUILanguageIds');
                        clientContext.executeQueryAsync(function () {
                            var languages = web.get_supportedUILanguageIds();
                            languages.forEach(function (s) {
                                var l = new Core.Schema.SupportedUILanguage();
                                l.LCID = s;
                                objects.push(l);
                            });
                            Core.Log.Information(_this.name, " reading of objects ended");
                            def.resolve(objects);
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Reading failed");
                            Core.Log.Error(_this.name, args.get_message());
                            def.resolve(objects);
                        });
                        return def.promise();
                    };
                    return SupportedUILanguages;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.SupportedUILanguages = SupportedUILanguages;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var TermHelper = (function () {
                    function TermHelper() {
                    }
                    TermHelper.prototype.publish = function (termgroups, context) {
                        var _this = this;
                        this.context = context;
                        var dfd = jQuery.Deferred();
                        this.defaultTermStore().done(function () {
                            _this.getGroups(_this.termStore).done(function (groups) {
                                var groupsEnum = groups.getEnumerator();
                                var groupInstances = [];
                                for (var k in termgroups) {
                                    var group = termgroups[k];
                                    var foundgroup = null;
                                    while (groupsEnum.moveNext()) {
                                        var currentGroup = groupsEnum.get_current();
                                        if (group.Name == currentGroup.get_name()) {
                                            foundgroup = currentGroup;
                                            groupInstances.push(foundgroup);
                                            for (var s in group.TermSets) {
                                                var termset = group.TermSets[s];
                                                var setEn = currentGroup.get_termSets().getEnumerator();
                                                var foundset = null;
                                                while (setEn.moveNext()) {
                                                    var currentSet = setEn.get_current();
                                                    if (termset.Name == currentSet.get_name()) {
                                                        foundset = currentSet;
                                                    }
                                                }
                                                if (!foundset) {
                                                    var newGuid = SP.Guid.newGuid();
                                                    foundset = currentGroup.createTermSet(termset.Name, newGuid.toString(), termset.Language);
                                                    _this.context.load(foundset);
                                                }
                                            }
                                        }
                                    }
                                    if (!foundgroup) {
                                        var newGuid = SP.Guid.newGuid();
                                        foundgroup = _this.termStore.createGroup(group.Name, newGuid.toString());
                                        groupInstances.push(foundgroup);
                                        _this.context.load(foundgroup);
                                        for (var s in group.TermSets) {
                                            var termset = group.TermSets[s];
                                            var newGuid = SP.Guid.newGuid();
                                            var newset = foundgroup.createTermSet(termset.Name, newGuid.toString(), termset.Language);
                                            _this.context.load(newset);
                                        }
                                    }
                                }
                                _this.context.executeQueryAsync(function () {
                                    // this.publishTermItems(this.termSet[k], this.termSet[k].items);
                                    _this.context.executeQueryAsync(function () {
                                        dfd.resolve(true);
                                    }, function (sender, args) {
                                        dfd.reject();
                                    });
                                }, function (sender, args) {
                                    dfd.reject();
                                });
                            }).fail(function (sender, args) {
                                dfd.reject();
                            });
                        }).fail(function (sender, args) {
                            console.log("fail get store");
                            dfd.reject();
                        });
                        return dfd;
                    };
                    TermHelper.prototype.read = function (context) {
                        var _this = this;
                        this.context = context;
                        var groupInstances = [];
                        var dfd = jQuery.Deferred();
                        this.defaultTermStore().done(function () {
                            _this.getGroups(_this.termStore).done(function (groups) {
                                var numberrequests = 0;
                                var groupsEnum = groups.getEnumerator();
                                while (groupsEnum.moveNext()) {
                                    numberrequests++;
                                }
                                groupsEnum.reset();
                                var numberresolved = 0;
                                while (groupsEnum.moveNext()) {
                                    var group = groupsEnum.get_current();
                                    _this.getTermSets(group).done(function (collection) {
                                        numberresolved++;
                                        var tg = new Core.Schema.TermGroup();
                                        tg.ID = group.get_id().toString();
                                        tg.Name = group.get_name();
                                        tg.Description = group.get_description();
                                        tg.SiteCollectionTermGroup = group.get_isSiteCollectionGroup();
                                        tg.TermSets = [];
                                        var tsEnum = collection.getEnumerator();
                                        while (tsEnum.moveNext()) {
                                            var termSet = tsEnum.get_current();
                                            var ts = new Core.Schema.TermSet();
                                            ts.IsOpenForTermCreation = termSet.get_isOpenForTermCreation();
                                            //ts.Language = termSet.get_
                                            ts.Name = termSet.get_name();
                                            ts.Terms = [];
                                            ts.Id = termSet.get_id().toString();
                                            tg.TermSets.push(ts);
                                            _this.GetTerms(context, termSet).done(function (terms) {
                                                ts.Terms = terms;
                                                groupInstances.push(tg);
                                                if (numberrequests == numberresolved) {
                                                    dfd.resolve(groupInstances);
                                                }
                                            }).fail(function (sender, args) {
                                                dfd.reject(sender, args);
                                            });
                                        }
                                    }).fail(function (sender, args) {
                                        dfd.reject(sender, args);
                                    });
                                }
                            }).fail(function (sender, args) {
                                dfd.reject(sender, args);
                            });
                        }).fail(function (sender, args) {
                            dfd.reject(sender, args);
                        });
                        return dfd;
                    };
                    TermHelper.prototype.GetTerms = function (context, parent) {
                        var _this = this;
                        var dfd = jQuery.Deferred();
                        var terms = [];
                        //get ALL terms for the termset and we will organize them in the async callback
                        var rawTerms = parent.getAllTerms();
                        context.load(rawTerms);
                        context.executeQueryAsync(function () {
                            //get the enumerator for terms list
                            var termEnumerator = rawTerms.getEnumerator();
                            //get flat list of terms
                            var FlatTerms = new Array();
                            while (termEnumerator.moveNext()) {
                                var currentTerm = termEnumerator.get_current();
                                var newTerm = new Core.Schema.Term();
                                newTerm.CustomSortOrder = currentTerm.get_customSortOrder();
                                newTerm.IsDeprecated = currentTerm.get_isDeprecated();
                                newTerm.IsReused = currentTerm.get_isReused();
                                newTerm.IsSourceTerm = currentTerm.get_isSourceTerm();
                                newTerm.PathOfTerm = currentTerm.get_pathOfTerm();
                                newTerm.Level = currentTerm.get_pathOfTerm().split(';').length - 1;
                                // newTerm.Language = defaultLanguage;
                                newTerm.SourceTermId = currentTerm.get_id().toString();
                                newTerm.Name = currentTerm.get_name();
                                FlatTerms.push(newTerm);
                            }
                            var topLevel = 0;
                            //sort by Name that all of the choice will return alphabetically
                            FlatTerms.sort(function (a, b) {
                                if (a.Level > topLevel) {
                                    topLevel = a.Level;
                                }
                                a = a.Name.toLowerCase();
                                b = b.Name.toLowerCase();
                                if (a < b)
                                    return -1;
                                if (a > b)
                                    return 1;
                                return 0;
                            });
                            //build a hierarchical representation of Terms by iterating through all of the terms for each level
                            for (var currentLevel = 0; currentLevel <= topLevel; currentLevel++) {
                                for (var i = 0; i < FlatTerms.length; i++) {
                                    var term = FlatTerms[i];
                                    if (term.Level == currentLevel) {
                                        if (currentLevel == 0) {
                                            var clone = jQuery.extend({}, term);
                                            terms.push(clone);
                                        }
                                        else {
                                            _this.getTermParentCollectionByPath(term.PathOfTerm, terms).push(term);
                                        }
                                    }
                                }
                            }
                            dfd.resolve(terms);
                        }, function (sender, args) {
                            dfd.reject(sender, args);
                        });
                        return dfd;
                    };
                    TermHelper.prototype.getTermParentCollectionByPath = function (path, terms) {
                        var term = null;
                        var parts = path.split(';');
                        var termList = terms;
                        for (var i = 0; i < parts.length - 1; i++) {
                            for (var j = 0; j < termList.length; j++) {
                                if (parts[i] == termList[j].Name) {
                                    term = termList[j];
                                    termList = term.Terms;
                                    break;
                                }
                            }
                        }
                        return termList;
                    };
                    //publishTermItems(termSet: TermSet, terms: Array<Term>, parentTerm?: SP.Taxonomy.Term) {
                    //    for (var i in terms) {
                    //        var term = terms[i];
                    //        var gid: any = SP.Guid.newGuid();
                    //        if (parentTerm) {
                    //            terms[i].termObj = parentTerm.createTerm(term.name, termSet.lcid, gid.toString());
                    //        } else {
                    //            terms[i].termObj = termSet.termSetObj.createTerm(term.name, termSet.lcid, gid.toString());
                    //        }
                    //        this.context.load(terms[i].termObj);
                    //        if (term.items) {
                    //            this.publishTermItems(termSet, terms[i].items, terms[i].termObj);
                    //        }
                    //    }
                    //}
                    TermHelper.prototype.defaultTermStore = function () {
                        var _this = this;
                        var dfd = jQuery.Deferred();
                        this.session = SP.Taxonomy.TaxonomySession.getTaxonomySession(this.context);
                        this.termStore = this.session.getDefaultSiteCollectionTermStore();
                        this.context.load(this.session);
                        this.context.load(this.termStore);
                        this.context.executeQueryAsync(function () {
                            dfd.resolve(_this.termStore);
                        }, function (sender, args) {
                            dfd.reject(sender, args);
                        });
                        return dfd;
                    };
                    TermHelper.prototype.getTermStores = function () {
                        var dfd = jQuery.Deferred();
                        this.session = SP.Taxonomy.TaxonomySession.getTaxonomySession(this.context);
                        var termStores = this.session.get_termStores();
                        this.context.load(this.session);
                        this.context.load(termStores);
                        this.context.executeQueryAsync(function () {
                            dfd.resolve(termStores);
                        }, function (sender, args) {
                            dfd.reject(sender, args);
                        });
                        return dfd;
                    };
                    TermHelper.prototype.getGroups = function (currentTermStore) {
                        var dfd = jQuery.Deferred();
                        var groups = currentTermStore.get_groups();
                        this.context.load(currentTermStore);
                        this.context.load(groups);
                        this.context.executeQueryAsync(function () {
                            dfd.resolve(groups);
                        }, function (sender, args) {
                            dfd.reject(sender, args);
                        });
                        return dfd;
                    };
                    TermHelper.prototype.getTermSets = function (currentGroup) {
                        var dfd = jQuery.Deferred();
                        var termSets;
                        this.context.load(currentGroup);
                        var termSets = currentGroup.get_termSets();
                        this.context.load(termSets);
                        this.context.executeQueryAsync(function () {
                            dfd.resolve(termSets);
                        }, function () {
                            dfd.reject();
                        });
                        return dfd;
                    };
                    TermHelper.prototype.createGroup = function (termStore, groupName) {
                        var dfd = jQuery.Deferred();
                        var newGuid = SP.Guid.newGuid();
                        var newGroup = termStore.createGroup(groupName, newGuid.toString());
                        this.context.load(newGroup);
                        this.context.executeQueryAsync(function () {
                            dfd.resolve(newGroup);
                        }, function () {
                            dfd.reject();
                        });
                        return dfd;
                    };
                    TermHelper.prototype.createTermSet = function (termStore, groupId, termSetName, lcid) {
                        var dfd = jQuery.Deferred();
                        var newGuid = SP.Guid.newGuid();
                        var group = termStore.getGroup(groupId);
                        var newTermSet = group.createTermSet(termSetName, newGuid.toString(), lcid);
                        this.context.load(newTermSet);
                        this.context.executeQueryAsync(function () {
                            dfd.resolve(newTermSet);
                        }, function () {
                            dfd.reject();
                        });
                        return dfd;
                    };
                    TermHelper.prototype.createTerm = function (termStore, termSetId, termName, lcid) {
                        var dfd = jQuery.Deferred();
                        var newGuid = SP.Guid.newGuid();
                        var termSet = termStore.getTermSet(termSetId);
                        var newTerm = termSet.createTerm(termName, lcid, newGuid.toString());
                        this.context.load(newTerm);
                        this.context.executeQueryAsync(function () {
                            dfd.resolve(newTerm);
                        }, function () {
                            dfd.reject();
                        });
                        return dfd;
                    };
                    TermHelper.prototype.createSubTerm = function (termStore, termSetId, parentTermId, termName, lcid) {
                        var dfd = jQuery.Deferred();
                        var newGuid = SP.Guid.newGuid();
                        var termSet = termStore.getTermSet(termSetId);
                        var parentTerm = termSet.getTerm(parentTermId);
                        var newTerm = parentTerm.createTerm(termName, lcid, newGuid.toString());
                        this.context.load(newTerm);
                        this.context.executeQueryAsync(function () {
                            dfd.resolve(newTerm);
                        }, function () {
                            dfd.reject();
                        });
                        return dfd;
                    };
                    TermHelper.prototype.deleteGroup = function (termStore, termStoreId, groupId) {
                        var dfd = jQuery.Deferred();
                        var group = termStore.getGroup(groupId);
                        group.deleteObject();
                        this.context.executeQueryAsync(function () {
                            dfd.resolve(true);
                        }, function () {
                            dfd.reject();
                        });
                        return dfd;
                    };
                    return TermHelper;
                })();
                ObjectHandlers.TermHelper = TermHelper;
                var TermGroups = (function (_super) {
                    __extends(TermGroups, _super);
                    function TermGroups() {
                        _super.call(this, "TermGroups");
                    }
                    TermGroups.prototype.ProvisionObjects = function (object) {
                        var def = jQuery.Deferred();
                        Core.Log.Information(this.name, "Code execution scope started");
                        var th = new TermHelper();
                        th.publish(object, this.contextFactory.ClientContext).done(function () {
                            def.resolve();
                        });
                        return def.promise();
                    };
                    TermGroups.prototype.ReadObjects = function (object) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        object = [];
                        var def = jQuery.Deferred();
                        var th = new TermHelper();
                        th.read(this.contextFactory.ClientContext).done(function (result) {
                            object = result;
                            Core.Log.Information(_this.name, "Code execution scope ended");
                            def.resolve(object);
                        }).fail(function (sender, args) {
                            Core.Log.Information(_this.name, "Reading failed");
                            Core.Log.Error(_this.name, args.get_message());
                            def.resolve(object);
                        });
                        return def.promise();
                    };
                    return TermGroups;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.TermGroups = TermGroups;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var WebSettings = (function () {
                    function WebSettings() {
                    }
                    return WebSettings;
                })();
                Schema.WebSettings = WebSettings;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IWebSettings.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var WebSettings = (function (_super) {
                    __extends(WebSettings, _super);
                    function WebSettings() {
                        _super.call(this, "WebSettings");
                    }
                    WebSettings.prototype.ProvisionObjects = function (object) {
                        var def = jQuery.Deferred();
                        var clientContext = this.contextFactory.ClientContext;
                        var web = this.contextFactory.Web;
                        if (object.WelcomePage) {
                            Core.Log.Information(this.name, "Setting WelcomePage to '" + object.WelcomePage + "'");
                            web.get_rootFolder().set_welcomePage(object.WelcomePage);
                            web.get_rootFolder().update();
                        }
                        web.update();
                        clientContext.load(web);
                        clientContext.executeQueryAsync(function () {
                            def.resolve();
                        }, function (sender, args) {
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    WebSettings.prototype.ReadObjects = function (object) {
                        var _this = this;
                        var def = jQuery.Deferred();
                        var clientContext = this.contextFactory.ClientContext;
                        var web = this.contextFactory.Web;
                        object = new Core.Schema.WebSettings();
                        Core.Log.Information(this.name, "Starting reading of objects");
                        var folder = web.get_rootFolder();
                        clientContext.load(web);
                        clientContext.executeQueryAsync(function () {
                            object.Title = web.get_title();
                            //object.AlternateCSS = web.get_
                            object.CustomMasterPageUrl = web.get_customMasterUrl();
                            object.Description = web.get_description();
                            object.MasterPageUrl = web.get_masterUrl();
                            //object.NoCrawl = web
                            //object.RequestAccessEmail = web.get_re
                            //object.SiteLogo = web.get_
                            //object.WelcomePage = web.get_we
                            Core.Log.Information(_this.name, "Reading of objects ended");
                            def.resolve(object);
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Reading failed");
                            Core.Log.Error(_this.name, args.get_message());
                            def.resolve(object);
                        });
                        return def.promise();
                    };
                    return WebSettings;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.WebSettings = WebSettings;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var Workflows = (function (_super) {
                    __extends(Workflows, _super);
                    function Workflows() {
                        _super.call(this, "Workflows");
                    }
                    Workflows.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    Workflows.prototype.ReadObjects = function (object) {
                        var _this = this;
                        var def = jQuery.Deferred();
                        Core.Log.Information(this.name, "Starting reading of objects");
                        var clientContext = this.contextFactory.ClientContext;
                        var workflowTemplates = this.contextFactory.Web.get_workflowTemplates();
                        var workflowAssociations = this.contextFactory.Web.get_workflowAssociations();
                        var workflowTemplatesInstance = [];
                        var workflowAssociationsInstance = [];
                        object = new Core.Schema.Workflows();
                        clientContext.load(workflowTemplates);
                        clientContext.load(workflowAssociations);
                        clientContext.executeQueryAsync(function () {
                            var listEnumerator = workflowTemplates.getEnumerator();
                            while (listEnumerator.moveNext()) {
                                var workflow = listEnumerator.get_current();
                                var w = new Core.Schema.WorkflowDefinition();
                                w.AssociationUrl = workflow.get_associationUrl();
                                w.Description = workflow.get_description();
                                w.DisplayName = workflow.get_name();
                                w.DraftVersion = workflow.get_objectVersion();
                                //w.FormField = workflow.get_
                                w.Id = workflow.get_id().toString();
                                // w.InitiationUrl = workflow.get_i
                                // w.Published = workflow.get;
                                // w.RequiresAssociationForm=workflow.get_associationUrl();
                                //w.RequiresInitiationForm = workflow.get
                                //w.RestrictToScope = workflow.get_;
                                // w.RestrictToType = workflow.get_;
                                //  w.XamlPath: string;
                                workflowTemplatesInstance.push(w);
                            }
                            var listEnumeratorw = workflowAssociations.getEnumerator();
                            while (listEnumeratorw.moveNext()) {
                                var workflow2 = listEnumeratorw.get_current();
                                var w2 = new Core.Schema.WorkflowSubscription();
                                w2.DefinitionId = workflow2.get_id().toString();
                                w2.Enabled = workflow2.get_enabled();
                                // w2.EventSourceId = workflow2.get_ev();
                                // w2.EventTypes = workflow2.();
                                w2.ManualStartBypassesActivationLimit = workflow2.get_allowManual();
                                w2.Name = workflow2.get_name();
                                w2.ListId = workflow2.get_listId().toString();
                                //w2.StatusFieldName = workflow2.();
                                workflowAssociationsInstance.push(w2);
                            }
                            object.WorkflowDefinitions = workflowTemplatesInstance;
                            object.WorkflowSubscriptions = workflowAssociationsInstance;
                            Core.Log.Information(_this.name, "Reading of objects ended");
                            def.resolve(object);
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Reading failed");
                            Core.Log.Error(_this.name, args.get_message());
                            def.resolve(object);
                        });
                        return def.promise();
                    };
                    return Workflows;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.Workflows = Workflows;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Feature = (function () {
                    function Feature() {
                    }
                    return Feature;
                })();
                Schema.Feature = Feature;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Field = (function () {
                    function Field() {
                    }
                    return Field;
                })();
                Schema.Field = Field;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var ContentType = (function () {
                    function ContentType() {
                    }
                    return ContentType;
                })();
                Schema.ContentType = ContentType;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="IListInstance.ts" />
/// <reference path="IFile.ts" />
/// <reference path="IPage.ts" />
/// <reference path="IFeature.ts" />
/// <reference path="IField.ts" />
/// <reference path="IContentType.ts" />
/// <reference path="INavigationNode.ts" />
/// <reference path="ICustomAction.ts" />
/// <reference path="IComposedLook.ts" />
/// <reference path="IWebSettings.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Provisioning = (function () {
                    function Provisioning() {
                    }
                    return Provisioning;
                })();
                Schema.Provisioning = Provisioning;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="../model/ILoggingOptions.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Logger = (function () {
                function Logger(loggingOptions) {
                    this.array = [];
                    this.loggingOptions = loggingOptions;
                }
                Logger.prototype.loggerEnabled = function () {
                    return (console && console.log);
                };
                Logger.prototype.Information = function (objectHandler, msg) {
                    if (!this.loggingOptions)
                        return;
                    var logMsg = new Date() + " || Information || " + objectHandler + " || " + msg;
                    if (this.loggerEnabled && this.loggingOptions.On) {
                        console.log(logMsg);
                    }
                    this.array.push(logMsg);
                };
                Logger.prototype.Error = function (objectHandler, msg) {
                    if (!this.loggingOptions)
                        return;
                    var logMsg = new Date() + " || Error || " + objectHandler + " || " + msg;
                    if (this.loggerEnabled && this.loggingOptions.On) {
                        console.log(logMsg);
                    }
                    this.array.push(logMsg);
                };
                Logger.prototype.Warning = function (objectHandler, msg) {
                    if (!this.loggingOptions)
                        return;
                    var logMsg = new Date() + " || Warning || " + objectHandler + " || " + msg;
                    if (this.loggerEnabled && this.loggingOptions.On) {
                        console.log(logMsg);
                    }
                    this.array.push(logMsg);
                };
                Logger.prototype.toString = function () {
                    return this.array.join("\n");
                };
                Logger.prototype.SaveToFile = function (contextFactory) {
                    var def = jQuery.Deferred();
                    console.log(this.array);
                    if (!this.loggingOptions || !this.loggingOptions.LoggingFolder) {
                        def.resolve();
                        return def.promise();
                    }
                    var clientContext = contextFactory.ClientContext;
                    var web = clientContext.get_site().get_rootWeb();
                    var fileName = new Date().getTime() + ".txt";
                    var fileCreateInfo = new SP.FileCreationInformation();
                    fileCreateInfo.set_url(fileName);
                    fileCreateInfo.set_content(new SP.Base64EncodedByteArray());
                    var fileContent = this.array.join("\n");
                    for (var i = 0; i < fileContent.length; i++) {
                        fileCreateInfo.get_content().append(fileContent.charCodeAt(i));
                    }
                    clientContext.load(web.getFolderByServerRelativeUrl(this.loggingOptions.LoggingFolder).get_files().add(fileCreateInfo));
                    clientContext.executeQueryAsync(function () {
                        def.resolve();
                    }, function (sender, args) {
                        def.resolve(sender, args);
                    });
                    return def.promise();
                };
                return Logger;
            })();
            Core.Logger = Logger;
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\typings\tsd.d.ts" />
/// <reference path="schema/IProvisioning.ts" />
/// <reference path="objecthandlers/Lists.ts" />
/// <reference path="objecthandlers/ComposedLook.ts" />
/// <reference path="objecthandlers/Files.ts" />
/// <reference path="objecthandlers/Pages.ts" />
/// <reference path="objecthandlers/CustomActions.ts" />
/// <reference path="objecthandlers/LocalNavigation.ts" />
/// <reference path="objecthandlers/PropertyBagEntries.ts" />
/// <reference path="objecthandlers/WebSettings.ts" />
/// <reference path="utilities/Logger.ts" />
/// <reference path="model/TemplateQueueItem.ts" />
/// <reference path="model/ILoggingOptions.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var startTime = null;
            var ObjectHandlerMethods;
            (function (ObjectHandlerMethods) {
                ObjectHandlerMethods[ObjectHandlerMethods["ProvisionObjects"] = 0] = "ProvisionObjects";
                ObjectHandlerMethods[ObjectHandlerMethods["ReadObjects"] = 1] = "ReadObjects";
            })(ObjectHandlerMethods || (ObjectHandlerMethods = {}));
            var setupWebDialog;
            function ShowWaitMessage(header, content, height, width) {
                setupWebDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose(header, content, height, width);
            }
            function start(json, creationInformation, method, factory) {
                var def = jQuery.Deferred();
                startTime = new Date().getTime();
                Core.Log.Information("Provisioning", "Starting at URL '" + factory.GetInstance().webServerRelativeUrl + "'");
                var queueItems = [];
                var handlers = new Core.Model.ObjectHandlerList();
                handlers.List.forEach(function (value) {
                    if (creationInformation["Export" + value] && Core.ObjectHandlers[value]) {
                        queueItems.push(new Core.Model.TemplateQueueItem(value, index, json[value], creationInformation, new Core.ObjectHandlers[value]()[ObjectHandlerMethods[method]], factory.GetInstance()));
                    }
                });
                var results = {};
                var promises = [];
                promises.push(jQuery.Deferred());
                promises[0].resolve();
                promises[0].promise();
                var index = 1;
                while (queueItems[index - 1] != undefined) {
                    var i = promises.length - 1;
                    promises.push(queueItems[index - 1].execute(promises[i]));
                    results[queueItems[index - 1].name] = null;
                    index++;
                }
                ;
                jQuery.when.apply(jQuery, promises).then(function () {
                    var args = arguments;
                    var n = 1;
                    for (var i in results) {
                        results[i] = args[n];
                        n++;
                    }
                    def.resolve(results);
                });
                return def;
            }
            function publish(factory, template, creationInformation, loggingOptions) {
                var def = jQuery.Deferred();
                ShowWaitMessage("Applying template", "This might take a moment..", 130, 600);
                Core.Log = new Core.Logger(loggingOptions);
                start(template.Template, creationInformation, ObjectHandlerMethods.ProvisionObjects, factory).then(function () {
                    var provisioningTime = ((new Date().getTime()) - startTime) / 1000;
                    Core.Log.Information("Provisioning", "All done in " + provisioningTime + " seconds");
                    Core.Log.SaveToFile(factory.GetInstance()).then(function () {
                        setupWebDialog.close(null);
                        def.resolve(Core.Log);
                    });
                });
                return def;
            }
            Core.publish = publish;
            function read(factory, template, creationInformation, loggingOptions) {
                var def = jQuery.Deferred();
                ShowWaitMessage("Reading template", "This might take a moment..", 130, 600);
                Core.Log = new Core.Logger(loggingOptions);
                start(template.Template, creationInformation, ObjectHandlerMethods.ReadObjects, factory).then(function (generated) {
                    var provisioningTime = ((new Date().getTime()) - startTime) / 1000;
                    Core.Log.Information("Reading", "All done in " + provisioningTime + " seconds");
                    Core.Log.SaveToFile(factory.GetInstance()).then(function () {
                        setupWebDialog.close(null);
                        template.Template = generated;
                        def.resolve(Core.Log, generated);
                    });
                });
                return def;
            }
            Core.read = read;
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Addin = (function () {
                    function Addin() {
                    }
                    return Addin;
                })();
                Schema.Addin = Addin;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Audit = (function () {
                    function Audit() {
                    }
                    return Audit;
                })();
                Schema.Audit = Audit;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var BreakRoleInheritance = (function () {
                    function BreakRoleInheritance() {
                    }
                    return BreakRoleInheritance;
                })();
                Schema.BreakRoleInheritance = BreakRoleInheritance;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var CustomActions = (function () {
                    function CustomActions() {
                    }
                    return CustomActions;
                })();
                Schema.CustomActions = CustomActions;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var DesignPackage = (function () {
                    function DesignPackage() {
                    }
                    return DesignPackage;
                })();
                Schema.DesignPackage = DesignPackage;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Features = (function () {
                    function Features() {
                    }
                    return Features;
                })();
                Schema.Features = Features;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var ListInstanceFieldRef = (function () {
                    function ListInstanceFieldRef() {
                    }
                    return ListInstanceFieldRef;
                })();
                Schema.ListInstanceFieldRef = ListInstanceFieldRef;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var ObjectSecurity = (function () {
                    function ObjectSecurity() {
                    }
                    return ObjectSecurity;
                })();
                Schema.ObjectSecurity = ObjectSecurity;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var PageLayout = (function () {
                    function PageLayout() {
                    }
                    return PageLayout;
                })();
                Schema.PageLayout = PageLayout;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Permissions = (function () {
                    function Permissions() {
                    }
                    return Permissions;
                })();
                Schema.Permissions = Permissions;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var ProvisioningTemplate = (function () {
                    function ProvisioningTemplate() {
                    }
                    return ProvisioningTemplate;
                })();
                Schema.ProvisioningTemplate = ProvisioningTemplate;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var ProvisioningTemplateCreationInformation = (function () {
                    function ProvisioningTemplateCreationInformation() {
                        this.ExportSitePolicy = true;
                        this.ExportWebSettings = true;
                        this.ExportRegionalSettings = true;
                        this.ExportSupportedUILanguages = true;
                        this.ExportAuditSettings = true;
                        this.ExportPropertyBagEntries = true;
                        this.ExportSecurity = true;
                        this.ExportSiteFields = true;
                        this.ExportContentTypes = true;
                        this.ExportLists = true;
                        this.ExportFeatures = true;
                        this.ExportCustomActions = true;
                        this.ExportFiles = true;
                        this.ExportPages = true;
                        this.ExportTermGroups = true;
                        this.ExportComposedLook = true;
                        this.ExportWorkflows = true;
                        this.ExportSearchSettings = true;
                        this.ExportPublishing = true;
                        this.ExportAddIns = true;
                    }
                    return ProvisioningTemplateCreationInformation;
                })();
                Schema.ProvisioningTemplateCreationInformation = ProvisioningTemplateCreationInformation;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Publishing = (function () {
                    function Publishing() {
                    }
                    return Publishing;
                })();
                Schema.Publishing = Publishing;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var RegionalSettings = (function () {
                    function RegionalSettings() {
                    }
                    return RegionalSettings;
                })();
                Schema.RegionalSettings = RegionalSettings;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var SupportedUILanguage = (function () {
                    function SupportedUILanguage() {
                    }
                    return SupportedUILanguage;
                })();
                Schema.SupportedUILanguage = SupportedUILanguage;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Term = (function () {
                    function Term() {
                    }
                    return Term;
                })();
                Schema.Term = Term;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var TermGroup = (function () {
                    function TermGroup() {
                    }
                    return TermGroup;
                })();
                Schema.TermGroup = TermGroup;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var TermSet = (function () {
                    function TermSet() {
                    }
                    return TermSet;
                })();
                Schema.TermSet = TermSet;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var WebTemplate = (function () {
                    function WebTemplate() {
                    }
                    return WebTemplate;
                })();
                Schema.WebTemplate = WebTemplate;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var WorkflowDefinition = (function () {
                    function WorkflowDefinition() {
                    }
                    return WorkflowDefinition;
                })();
                Schema.WorkflowDefinition = WorkflowDefinition;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Workflows = (function () {
                    function Workflows() {
                    }
                    return Workflows;
                })();
                Schema.Workflows = Workflows;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var WorkflowSubscription = (function () {
                    function WorkflowSubscription() {
                    }
                    return WorkflowSubscription;
                })();
                Schema.WorkflowSubscription = WorkflowSubscription;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Test;
        (function (Test) {
            function encode(text) {
                var tagsToReplace = {
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;'
                };
                function replaceTag(tag) {
                    return tagsToReplace[tag] || tag;
                }
                function safe_tags_replace(str) {
                    return str.replace(/[&<>]/g, replaceTag);
                }
                return safe_tags_replace(text);
            }
            function getQueryStringParameter(paramToRetrieve) {
                var params = document.URL.split("?")[1].split("&");
                for (var i = 0; i < params.length; i = i + 1) {
                    var singleParam = params[i].split("=");
                    if (singleParam[0] == paramToRetrieve)
                        return singleParam[1];
                }
            }
            var hostweburl = getQueryStringParameter("SPHostUrl");
            var appweburl = getQueryStringParameter("SPAppWebUrl");
            hostweburl = decodeURIComponent(hostweburl);
            appweburl = decodeURIComponent(appweburl);
            SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
                $.getScript(SP.Utilities.Utility.getLayoutsPageUrl('sp.requestexecutor.js'), function () {
                    $.getScript(SP.Utilities.Utility.getLayoutsPageUrl('sp.Policy.js'), function () {
                        $.getScript(SP.Utilities.Utility.getLayoutsPageUrl('sp.taxonomy.js'), function () {
                            var ptemplate = new Pzl.Sites.Core.Schema.ProvisioningTemplate();
                            ptemplate.ContentTypes = []; //new Pzl.Sites.Core.Schema.ContentType();
                            var creationinformation = new Pzl.Sites.Core.Schema.ProvisioningTemplateCreationInformation();
                            var logging = { "On": true };
                            var template = new Pzl.Sites.Core.Schema.Provisioning();
                            template.Template = ptemplate;
                            var contextFactory = new Pzl.Sites.Core.Model.WebProxyContextFactory(hostweburl, appweburl);
                            Pzl.Sites.Core.read(contextFactory, template, creationinformation, logging).done(function (log) {
                                var html = log.array.join("<br>");
                                jQuery("#message").html(html);
                                var html2 = JSON.stringify(template, null, 4);
                                jQuery("#resultcontent").html(encode(html2));
                            });
                        });
                    });
                });
            });
        })(Test = Sites.Test || (Sites.Test = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
//# sourceMappingURL=js-site.core.js.map