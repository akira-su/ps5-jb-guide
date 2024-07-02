## Required Reading

The [etaHEN](https://github.com/LightningMods/etaHEN) jailbreak is only compatible with firmware versions from 3.00 to 4.51. As a result, older firmware versions must update manually in order to use the exploit.

While this guide focuses on updating to 4.51, this method will work for any firmware, as long as the target firmware version is above your current firmware version.

Note that you can only update to 4.51 if you are on firmware version 4.50 or below. If you are on firmware version 5.00 or above, this will not work.

We will ensure that the PS5 uses the update file we want by disabling network connectivity and deleting any pre-downloaded updates. It is also recommend to disable automatic updates to stop your PS5 from updating in the future without your permission.

## What you need

- A computer
- An exFAT or FAT32 formatted USB storage device with ~1,1GB of free space
- The `PS5UPDATE.PUP` file corresponding to the firmware version you are trying to update to
  - [<i class="fas fa-download"></i> PS5UPDATE.PUP](https://archive.org/download/ps5-official-firmwares/System%20Firmwares/Firmware%2004.51.00/PS5UPDATE.PUP) (4.51)

## Instructions

### Section I - Drive Preparation

1. Plug your USB device into your computer
1. Create a folder named `PS5` on the root of your USB drive
1. Create a folder named `UPDATE` in the `PS5` folder on your USB drive
1. Rename your downloaded update file to `PS5UPDATE.PUP` if it is not already named that
    - If you downloaded the update from the link above, you won't need to do this
1. Move `PS5UPDATE.PUP` to the newly created `UPDATE` folder

### Section II - Console preparation

1. Check your notifications to ensure you have no updates downloaded
    - If you do, delete the updates
1. Open the Settings application
1. Navigate to the "Network" section and open it
1. Ensure that "Connect to the Internet" is disabled
1. Go back to return to the main Settings menu
1. Navigate to the "System" section and open it
1. Navigate to the "Automatic Downloads" section and open it
1. Ensure that all options in this section are disabled
1. Go back to return to the main Settings menu

### Section III - Updating to 4.51

1. Plug your USB device into your PS5
1. Start your PS5 console in Safe Mode: press and hold the power button, releasing after the second beep
1.  Select Update System Software
1. Select Update from USB Storage Device
1. **Ensure that the text says "Version 4.51"**
    - If it does not, go back and repeat these instructions again
    - If you are trying to update to a different firmware version, this text should say the firmware that you want instead
1. Press "OK"

Your PS5 should restart to complete the update. Once finished, you should boot back into firmware 4.51.

#### Section IV - Finishing up

1. Open the Settings application
1. Navigate to the "Network" section and open it
1. To use network functionality, enable "Connect to the Internet"
