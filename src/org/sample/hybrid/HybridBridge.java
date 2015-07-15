package org.sample.hybrid;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import java.util.ArrayList;

/**
 * Created by hschinsk on 6/18/15.
 */
public class HybridBridge extends CordovaPlugin {
    public ArrayList itemsList = new ArrayList();
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        try {
            if (action.equals("addItem")) {
                String item = args.getString(0);
                String className = args.getString(1);
                Context context = cordova.getActivity().getApplicationContext();
                Intent intent = new Intent(context,Class.forName(className));
                itemsList.add(item);
                intent.putStringArrayListExtra("items", itemsList);
                cordova.startActivityForResult(this,intent,1);
                callbackContext.success();
                return true;
            }
            callbackContext.error("Invalid action");
            return false;
        } catch(Exception e) {
            System.err.println("Exception: " + e.getMessage());
            callbackContext.error(e.getMessage());
            return false;
        }
    }
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        // Handle a result here if one set in the Activity class started
        System.out.println("Activity Result: " + resultCode); //-1 is RESULT_OK
        if (resultCode==Activity.RESULT_OK) {
            System.out.println("All good!");
        }
    }

}
