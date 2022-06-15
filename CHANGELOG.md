This version comes with Some Features, Updates and Enhancements
## Feature
* 🚀 State Management  - Now we have a basic state Management.
* Added `Image` Widget.
* Added `Painting` Class with `BlendMode` list.
* Added `BoxFit` Class with `BoxFit` list.

## Enhancements


## Bug Fixes




# v0.2.3-alpha-1 (2022-06-13)
This version comes with Some Features, Updates and Enhancements
## Feature
* Added `Radius` Class.
* Added `BorderRadiusGeometry` Class.
* Added `BorderRadius` property to the Container Component.
* Added `Spacer Widget`.
* Added `Cssprops` with `CssProperties` class that maps the Flutjs properties to css attributes.
* Added `Stack Widget`.
* Added `Positioned`.

## Enhancements
* Removed Tailwind Css Dependency.

## Bug Fixes
* Container now have Width and Hight of Auto as default value.
* Column widget now have the correct MainAxisDirection.
* Paddings now works well
* Added Margin and Padding Attributrs to the container



# v0.2.1-alpha-1 (2022-06-11)
This version adds new Features and some Bug Fixes.
## Feature
* Added AbsoluteUnits and RelativeUnits Types to define the length on all components that requires number and unit.
* Added `width_size_measurement_unit<AbsoluteUnits|RelativeUnits>` and `height_size_measurement_unit<AbsoluteUnits|RelativeUnits>` to the Container 

```ts
 Container(
    {
        color:Colors.White,
        height:40,
        width:70,
        width_size_measurement_unit:AbsoluteUnits.pixels,
        height_size_measurement_unit:AbsoluteUnits.pixels,
    }
)
```


Component to define the measurement unit for width and height.
* Added White and Black Colors.

## Bug Fixes
* Colors Class now return the correct colors from a given hexadecimal value. 