## Feature
* Added `Radius` Class.
* Added `BorderRadiusGeometry` Class.
* Added `BorderRadius` property to the Container Component.
* Added `Spacer Widget`.

## Bug Fixes
* Container now have Width and Hight of Auto as default value.
* Column widget now have the correct MainAxisDirection.


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