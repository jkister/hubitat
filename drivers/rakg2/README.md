# Ring Alarm Keypad G2 Community Driver
for <a href="https://hubitat.com/" target="_blank">Hubitat Elevation</a><br>
<br>
<b>Design Usage:</b><br>
Enhanced version of Hubitats (bcopeland) driver.<br>
Continued version of <a href='https://github.com/bptworld/Hubitat/tree/master/Drivers/Ring%20Alarm%20Keypad%20G2%20Community' target="_blank">BPTWorld's Community driver</a> (<a href="https://community.hubitat.com/t/82990" target="_blank">original thread</a>).<br>
<br>
<b>Installation</b><br>
I recommend installing from <a href="https://hubitatpackagemanager.hubitatcommunity.com/" target="_blank">HPM</a><br>
For manual install, use Drivers -> New Driver -> Import Code<br>
 choose from the <a href="https://raw.githubusercontent.com/jkister/hubitat/master/drivers/rakg2/rakg2-driver.groovy" target="_blank">stable</a> or <a href="https://raw.githubusercontent.com/jkister/hubitat/develop/drivers/rakg2/rakg2-driver.groovy" target="_blank">dev/beta</a> code<br>
<br>
<b>Tips & Tricks</b>:<br>
* Keypad supports several tones that can be played via custom rule in RM
  * Create New Action -> 
  * Set Variable, Mode or File, Run Custom Action -> 
  * Run Custom Action -> 
  * Security keypad -> 
  * <i>the keypad device</i> -> 
  * playTone -> 
  * parameter type = string -> 
  * Tone_<i>X</i> where <i>X</i> is 1-9

 They can be previewed/played with the Play Tone button on the device page. 
<br>
<br>
Please visit <a href='https://community.hubitat.com/t/107035' target="_blank">the community thread</a> for more information.
