﻿#JS Sites Core Schema
----------


##Root Elements
Here follows the list of root elements available in the JS Sites Core Schema.
  

```json
{
    "Parameters": {},
    "PropertyBagEntries": {},
    "Files": [],
    "Pages": [],
    "Lists": [],
    "CustomActions": [],
    "LocalNavigation": {},
    "ComposedLook": {}
}
```

Element|Type|Description
-------|----|-----------
Parameters|[Parameters](#parameters)|No description available yet
PropertyBagEntries|[PropertyBagEntries](#propertybagentries)|No description available yet
Files|[Files](#files)|No description available yet
Pages|[Pages](#pages)|No description available yet
Lists|[Lists](#lists)|No description available yet
CustomActions|[CustomActions](#customactions)|No description available yet
LocalNavigation|[LocalNavigation](#localnavigation)|No description available yet
ComposedLook|[ComposedLook](#composedlook)|No description available yet


###Parameters



###PropertyBagEntries
```json
     "PropertyBagEntries": {}
```

An Object of key value pairs



###Files
```json
     "Files": []
```

Attibute|Type|Description
--------|----|-----------
Files|Array<[File](#file)>|The File entries of the Files, optional collection of elements



###Pages
```json
     "Pages": []
```

Attibute|Type|Description
--------|----|-----------
Pages|Array<[Page](#page)>|The Page entries of the Pages, optional collection of elements



###Lists
The Lists instances of the JS Sites Core Template, optional element

```json
    "Lists": []
```

Element|Type|Description
-------|----|-----------
ListInstance|[ListInstance](#listinstance)|



###CustomActions
```json
     "CustomActions": []
```

Attibute|Type|Description
--------|----|-----------
CustomActions|Array<[CustomAction](#customaction)>|The CustomAction entries of the CustomActions, optional collection of elements



###LocalNavigation
```json
     "LocalNavigation": []
```

Attibute|Type|Description
--------|----|-----------
NavigationNodes|Array<[NavigationNode](#navigationnode)>|The NavigationNodes entries of the LocalNavigation, optional collection of elements



###ComposedLook
```json
    {
      "ColorPaletteUrl": "",
      "FontSchemeUrl": "",
      "BackgroundImageUrl": ""
    }
```


Attibute|Type|Description
--------|----|-----------
ColorPaletteUrl|string|The ColorPaletteUrl of the Composed Look, required attribute
FontSchemeUrl|string|The FontSchemeUrl of the Composed Look, optional attribute
BackgroundImageUrl|string|The BackgroundImageUrl of the Composed Look, optional attribute




###ListInstance
Defines a ListInstance element

```json
    {
      "Title": "",
      "Description": "",
      "Url": "",
      "TemplateType": 000,
      "Folders": [],
      "ContentTypeBindings": []
    }
```


Attibute|Type|Description
--------|----|-----------
Title|string|The Title of the List Instance, required attribute
Description|string|The Description of the List Instance, optional attribute
TemplateType|number|The TemplateType of the List Instance, required attribute Values available here: https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.listtemplatetype.aspx
Url|string|The Url of the List Instance, required attribute
ContentTypeBindings|Array<[ContentTypeBinding](#contenttypebinding)>|The ContentTypeBindings entries of the List Instance, optional collection of elements
Folders|Array<[Folder](#folder)>|The Folders entries of the List Instance, optional collection of elements


###ContentTypeBinding
Defines a ContentTypeBinding element

```json
    {
      "ContentTypeId": ""
    }
```


Attibute|Type|Description
--------|----|-----------
ContentTypeId|string|The ContentTypeId of the ContentTypeBinding, required attribute


###Folder
Defines a Folder element

```json
    {
        "Name": "Agenda",
        "DefaultValues": {}
    }
```


Attibute|Type|Description
--------|----|-----------
Name|string|The Name of the Folder, required attribute
DefaultValues|Key/Value Pair|The DefaultValues of the Folder, required attribute


###NavigationNode
Defines a NavigationNode element

```json
    {
      "Title": "",
      "Url": ""
    }
```


Attibute|Type|Description
--------|----|-----------
Title|string|The Title of the NavigationNode, required attribute
Url|string|The Url of the NavigationNode, required attribute

###CustomAction
Defines a NavigationNode element

```json
    {
        "CommandUIExtension": "",
        "Description": "",
        "Group": "",
        "ImageUrl": "",
        "Location": "",
        "Name": "",
        "RegistrationId": "",
        "RegistrationType": "",
        "ScriptBlock": "",
        "ScriptSrc": "",
        "Sequence": 0,
        "Title": "",
        "Url": ""
    }
```


Attibute|Type|Description
--------|----|-----------
CommandUIExtension|string|The CommandUIExtension of the CustomAction, optional attribute
Description|string|The Description of the CustomAction, optional attribute
Group|string|The Group of the CustomAction, optional attribute
ImageUrl|string|The ImageUrl of the CustomAction, optional attribute
Location|string|The Location of the CustomAction, optional attribute
Name|string|The Name of the CustomAction, optional attribute
RegistrationId|string|The RegistrationId of the CustomAction, optional attribute
RegistrationType|string|The RegistrationType of the CustomAction, optional attribute
ScriptBlock|string|The ScriptBlock of the CustomAction, optional attribute
ScriptSrc|string|The ScriptSrc of the CustomAction, optional attribute
Sequence|number|The Sequence of the CustomAction, optional attribute
Title|string|The Title of the CustomAction, optional attribute
Url|string|The Url of the CustomAction, optional attribute