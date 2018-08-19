package datatableSD;

import java.util.List;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class datatableSD {

	WebDriver driver;

	@Given("User need to be on facebook login page")
	public void user_need_to_be_on_facebook_login_page() { 
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\ambhatta\\OneDrive - Nokia\\Learning\\SoftwareDownload-Automation\\chromedriver.exe");
		driver = new ChromeDriver();
		//System.setProperty("webdriver.gecko.driver", "C:\\Users\\ambhatta\\OneDrive - Nokia\\Learning\\SoftwareDownload-Automation\\geckodriver.exe");
		//driver = new FirefoxDriver();
		
		//System.setProperty("webdriver.ie.driver", "C:\\Users\\ambhatta\\OneDrive - Nokia\\Learning\\SoftwareDownload-Automation\\IEDriverServer_x64_3.13.0\\IEDriverServer.exe");
		//driver = new InternetExplorerDriver();
		
		driver.navigate().to("https://www.facebook.com/");
		driver.manage().window().maximize();
		
	} 

	@When("^User enters user \"([^\"]*)\" first name$") 
	public void user_enters_user_first_name(String userName) { 
		driver.findElement(By.xpath("//input[@id='u_0_j']")).sendKeys(userName);

	} 

	@Then("^User check user \"([^\"]*)\" first name is present$") 
	public void user_check_user_first_name_is_present(String userName) { 
		String userNameActual = driver.findElement(By.xpath("//input[@id='u_0_j']")).getAttribute("value");
		Assert.assertEquals(userName, userNameActual);
		//driver.quit();
		//throw new PendingException();
	}
	
	@Then("^Close the browser$")
	public void  close_the_browser(){
		driver.close();
		driver.quit();
	}
	
	@When("Enter following details")
	public void enter_following_details(DataTable table){
		
		List<List<String>> data = table.raw();
		String userName1 = data.get(0).get(0);
		String surName1 = data.get(0).get(1);
		String mobile1 = data.get(0).get(2);
		
		
		String userName2 = data.get(1).get(0);
		String surName2 = data.get(1).get(1);
		String mobile2 = data.get(1).get(2);
		
		String userName3 = data.get(2).get(0);
		String surName3 = data.get(2).get(1);
		String mobile3 = data.get(2).get(2);
		
		driver.findElement(By.xpath("//input[@id='u_0_j']")).sendKeys(userName2);
		driver.findElement(By.xpath("//input[@id='u_0_l']")).sendKeys(surName2);
	}

}
