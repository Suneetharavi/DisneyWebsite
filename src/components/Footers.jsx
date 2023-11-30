import React from 'react'

function Footers() {
  return (
    <div className='footerClassDiv'>

        <div className='footerHeaderDiv'>
            <img src='https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png'
             alt='Disneylogo'
             width='100'/>
        </div>
        
        <div className='footerTextDiv'>
           <div className='footer-about'>
            
            <a href="https://www.thewaltdisneycompany.com/?ppLink=pp_wdig">About Disney</a> 
            <a href="https://help.disney.com/">Disney Help</a>
            <a href="https://jobs.disneycareers.com">Careers</a>
            <a href="http://disney.go.com/guestservices/">Contact Us</a>
            <a href="https://ddn.disney.com/">Advertise With Us</a>
            <a href="https://disneyrewards.com/disney-premier-credit-card-hc/?CELLPS=62FV19">Disney® Premier Visa® Card</a>
           </div>
         
            <div className="footer-legal">
                <a href="https://disneytermsofuse.com/">Terms of Use</a>
                <a href="https://help.disney.com/articles/en_US/FAQ/Legal-Notices">Additional Content Information</a>
                <a href="https://privacy.thewaltdisneycompany.com/en/">Privacy Policy</a>
                <a href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-state-privacy-rights/">Your US State Privacy Rights</a>
                <a href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/">Children's Online Privacy Policy</a>
                <a href="https://privacy.thewaltdisneycompany.com/en/dnssmpi/" class="ot-sdk-show-settings" target="_blank" rel="noopener noreferrer">Do Not Sell or Share My Personal Information</a>
                <a href="http://preferences-mgr.truste.com/?type=disneycolor&amp;affiliateId=115">Interest-Based Ads</a>
           
            </div>
            <div id="footer-copyright">
                © Disney, All Rights Reserved, Disney Entertainment
            </div>

        </div>

    </div>
  )
}

export default Footers