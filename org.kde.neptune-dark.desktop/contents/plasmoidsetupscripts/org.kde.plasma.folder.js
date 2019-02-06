applet.wallpaperPlugin = 'org.kde.image'
applet.wallpaperMode = 'SingleImage'

applet.currentConfigGroup = new Array("General");
applet.writeConfig("arrangement",1);
applet.writeConfig("pressToMove",true);
applet.writeConfig("showToolbox",false);
applet.writeConfig("selectionMarkers",false);
//       [Containments][18][Wallpaper][org.kde.image][General]
applet.currentConfigGroup = new Array("Wallpaper", "org.kde.image", "General");
applet.writeConfig("Image", "file:///usr/share/plasma/look-and-feel/org.kde.neptune-dark.desktop/contents/components/artwork/background.png");
applet.writeConfig("FillMode","2");
