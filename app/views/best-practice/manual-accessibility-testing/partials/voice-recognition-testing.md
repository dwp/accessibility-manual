### Voice recognition testing

Every page should be tested using voice recognition software. If you're using Apple devices you can use [Voice Control](https://www.apple.com/uk/accessibility/mac/mobility/) for free, and if you're using Windows then you can use [Speech Recognition](https://support.microsoft.com/en-us/windows/use-voice-recognition-in-windows-10-83ff75bd-63eb-0b6c-18d4-6fae94050571) for free.

When using voice recognition software you should make sure that you can interact with every element which is supposed to be interactive. For example, buttons, links, form inputs. You should make sure that things behave as expected based on the way that they look. A common failure on websites is to style non-button elements to look like buttons, such as links, but this means voice recognition software wont respond to 'click button' commands.

Another thing to test with voice recognition software is input fields. Make sure that whitespace is not an issue. A lot of voice controllers will add spaces when you pause for breath. These should not cause validation errors when you submit the form, and they should not factor into any max lengths on the field. For example, if you're entering an account number for a bank, and it should be 8 characters long, it shouldn't count the white spaces in the total.

A list of common voice recognition software:
- [Voice Control on Mac](https://www.apple.com/uk/accessibility/mac/mobility/)
- [Voice Control on iPhone](https://www.apple.com/uk/accessibility/iphone/mobility/)
- [Speech Recognition on Windows](https://support.microsoft.com/en-us/windows/use-voice-recognition-in-windows-10-83ff75bd-63eb-0b6c-18d4-6fae94050571)
- [Dragon](https://shop.nuance.co.uk/store/nuanceeu/en_GB/Content/pbPage.home?currency=GBP&pgmid=95401100&utm_source=google&utm_medium=cpc&utm_campaign=EHK-AO-2020-DragonPC_Ecom+/+DBU+/+DPI+/+Dragon+/+-+/+Product+/+UK+-+EN+/+-+/+Exact+/+Desktop&keyword=nuance+dragon-e&gclid=Cj0KCQjw28T8BRDbARIsAEOMBcyn_wR_zdsppdTcsl4isEhZM6BOOR0fpzcjGhdwavDgiOYRoLBwqTkaAm4jEALw_wcB)
