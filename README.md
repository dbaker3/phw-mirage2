# phw-mirage2
Mirage2 based theme for PH Welshimer Memorial Library

Place the phw-mirage2 directory in `[dspace_source]/dspace/modules/xmlui-mirage2/src/main/webapp/themes`

The resulting directory structure should appear as:
  + themes
    - phw-mirage2
      + images
      + styles

You must also enable the theme in the `<themes>` section of `[dspace_source]/dspace/config/xmlui.xconf` by adding:
  ```xml
    <theme name="PHW Mirage2" regex=".*" path="phw-mirage2/" />
  ```

Then build with the Mirage 2 option enabled: `-Dmirage2.on=true`
