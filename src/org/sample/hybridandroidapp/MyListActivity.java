package org.sample.hybridandroidapp;

import android.app.ListActivity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.ArrayAdapter;

import java.util.ArrayList;
/**
 * Created by hschinsk on 7/11/15.
 */
public class MyListActivity extends ListActivity {

    ArrayList<String> list = new ArrayList<String>();

    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /** Setting a custom layout for the list activity */
        setContentView(R.layout.activity_list);

        Intent intent = this.getIntent();

        if (intent.hasExtra("items")) {
            list = intent.getExtras().getStringArrayList("items");
        }
        /** The adapter to manage the data for the list **/
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, list);

        /** Setting the adapter to the ListView */
        setListAdapter(adapter);

        setResult(RESULT_OK, intent);
    }

}