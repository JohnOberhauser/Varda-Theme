To import the theme, go to plugins and install plugin from disk.

Select the theme jar file `./Varda-Intellij-Theme/Varda-Intellij-Theme.jar`

To build the theme, ensure the plugin dev kit plugin is installed.
Then open `./Varda-Intellij-Theme` as it's own project.  File -> build -> prepare for distribution
If the option isn't there, make sure ./.idea/modules.xml is pointing to the iml file in the root directory, and
not the one in the .idea folder


To install the scope:

copy the contents of scope to a new scope created in file -> settings -> appearance and behavior -> scopes