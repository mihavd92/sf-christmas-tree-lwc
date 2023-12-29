# Christmas tree at Salesforce
2023 is coming to an end, and 2024 is just around the corner. The magic of the New Year celebration is already felt in the air, and I wish to share it with everyone. Why not add this New Year's magic to our beloved Salesforce?
First, let's download this repository with the necessary files.

Afterwards, we need to upload the "tree.zip" file into our SF organization as a Static Resource named "tree".
<br />
![1](https://github.com/mihavd92/sf-christmas-tree-lwc/assets/50591995/86546f81-2268-4ccf-8bea-8cf4af485edc)
<br />
Next, you'll need to open VS Code and create an LWC component.
<br />
If you're unsure how to do this, a step-by-step guide on Trailhead will be incredibly helpful. There are 2 modules there – the first one covers installing and configuring VS Code, while the second focuses on creating the LWC component directly:
<br />
https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/set-up-visual-studio-code
<br />
https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/create-a-hello-world-lightning-web-component
<br />
Next, we create our LWC component and add code from this repository.
You can either copy the component's code or directly place them into your LWC folder:
<br />
**force-app/main/default/lwc**
<br />
Your structure should looks like as it:
<br />
![1703848004876](https://github.com/mihavd92/sf-christmas-tree-lwc/assets/50591995/18117065-2a77-433c-8253-8ea5c800544b)
<br />
Those who have manually created an LWC (Lightning Web Component) might have noticed that only HTML + JS are generated, and CSS needs to be created manually.
<br />
Next, right-click on the editor and select "Deploy This Source to Org"
<br />
![2](https://github.com/mihavd92/sf-christmas-tree-lwc/assets/50591995/034f4010-875b-486f-9028-cd97905435d0)
<br />
When the download is complete and we receive a notification of successful download, we log into our organization, navigate to the page where we will add our Christmas tree. In my case, it was the Contact page:
<br />
![3_1](https://github.com/mihavd92/sf-christmas-tree-lwc/assets/50591995/919235f7-9fef-464a-842e-39fbfca00e38)
<br />
![3_2](https://github.com/mihavd92/sf-christmas-tree-lwc/assets/50591995/1e23752a-dfb1-4d7f-a193-0fccf73186f0)
<br />
Enjoying a beautiful Christmas tree and getting into the holiday spirit ;-)
<br />
You can also modify certain parameters of the tree. For instance, if you want a different image of the tree itself, upload the desired image, add it to a zip archive named "tree", and upload it as a Static Resource named "tree".
In the component code, by changing the parameter values, you can adjust the settings of the Christmas lights:
![1703848195050](https://github.com/mihavd92/sf-christmas-tree-lwc/assets/50591995/ddf6b38e-fd9d-402a-9348-7c37fca18c5c)
<br />
By changing the values of **maxX** and **maxY**, you can adjust the width and height of the array of lights that collectively form our Christmas tree.
<br />
![1703848201035](https://github.com/mihavd92/sf-christmas-tree-lwc/assets/50591995/8ab58232-8cbb-4036-846a-6c9814d80ea9)
<br />
By changing the values of left and top, we move the overlay of lights on the background tree.
<br />
width and height determine the size of individual lights.
I hope this post brings a bit of New Year magic and celebration into your life.
