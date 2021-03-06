package hookSD;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		monochrome = true,
		
		dryRun = false,
		tags = {"@ALL"}, //tags mentioned like @ALL/@Important is user defined and any keyword can be used
		//tags = {"@Smoke"}, //tag will execute only scenarios matching Smoke (Names are user defined)
		//tags = {"Regression"}, //tag will execute only scenarios matching Regression (Names are user defined)
		//tags = {"@Smoke","@Regression"}, //AND condition, test cases that are mapped for Smoke and Regression will be executed
		//tags = {"@Smoke , @Regression"}, //OR condition, test cases that are mapped for Smoke and Regression will be executed
		
		
		features = { "src/test/resources/com/basic/hookFF/"},
		
		glue = { "hookSD/" },
				
		plugin = {
		"pretty",
		"html:target/Hook-HTML-REPORT",
		"json:target/Hook-JSON-REPORT.json"
		}

		)

public class hookTest {




}