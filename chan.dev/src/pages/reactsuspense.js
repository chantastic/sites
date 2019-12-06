import React from "react"
import { Styled } from "theme-ui"
export default ({ data }) => (
  <>
    <h1>React Suspense</h1>
    <p>
      Yeah, this site sucks right now.
      <br />
      But the content is good.
    </p>
    <h2>Buy My React Suspense Course</h2>
    <a href="https://egghead.io/courses/build-an-app-with-suspense-hooks-and-context">
      Buy it alone
    </a>
    <br />
    Or get{" "}
    <a href="https://school.reactpatterns.com/p/subscription/?product_id=705894&coupon_code=MEETUP">
      50% off all my courses with code <code>MEETUP</code>.
    </a>
    <h2>Learn other stuff about React and JavaScript</h2>
    <NewsletterEmbed />
    <h2>Learn About Suspense from the people who make it</h2>
    <p>
      Here from React Core team members of the best [React
      podcast](https://reactpodcast.com) in the world:
    </p>
    <ul>
      <li>
        <a href="https://reactpodcast.com/70">
          70: Andrew Clark on Concurrent Mode
        </a>
      </li>
      <li>
        <a href="https://reactpodcast.com/71">
          71: Joe Savona on Relay and Data Fetching with Suspense
        </a>
      </li>
      <li>
        <a href="https://reactpodcast.com/73">
          73: Brian Vaughn on Fast Refresh for Web and Concurrent React Dev
          Tools
        </a>
      </li>
    </ul>
  </>
)

function NewsletterEmbed() {
  return (
    <form
      action="https://app.convertkit.com/forms/1010489/subscriptions"
      className="seva-form formkit-form"
      method="post"
      data-sv-form={1010489}
      data-uid="b3af526942"
      data-format="inline"
      data-version={5}
      data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"custom_css":{"css":null},"incentive_email":{"action":"url","auto_confirm":false,"button_text":"Confirm your subscription","content_one":"Thanks for signing up. Click the link below to confirm your subscription and you&apos;ll be on your way.","content_two":"It&apos;s good to have you!","from_email_address_id":1318905,"url":"https://app.convertkit.com/confirm-subscription","send_email":true,"subject":"Important: confirm your subscription","upload_file_name":null,"upload_key":null},"modal":{"trigger":null,"scroll_percentage":null,"timer":null,"devices":null,"show_once_every":null},"powered_by":{"show":false,"url":"https://convertkit.com/?utm_source=dynamic&utm_medium=referral&utm_campaign=poweredby&utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"store":{"ckjs_version":"5","path":"b3af526942/aee6ebe0cb","uuid":"b3af526942","url":"https://f.convertkit.com/b3af526942/aee6ebe0cb.js","html_url":"https://pages.convertkit.com/b3af526942/aee6ebe0cb"},"thank_you_page":{"enabled":false}},"version":"5"}'
      min-width="400 500 600 700 800"
    >
      <div data-style="clean">
        <ul
          className="formkit-alert formkit-alert-error"
          data-element="errors"
          data-group="alert"
        />
        <div
          data-element="fields"
          data-stacked="false"
          className="seva-fields formkit-fields"
        >
          <div className="formkit-field">
            <input
              className="formkit-input"
              aria-label="Your first name"
              style={{
                color: "rgb(0, 0, 0)",
                borderColor: "rgb(227, 227, 227)",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
                borderBottomLeftRadius: "4px",
                fontWeight: 400,
              }}
              name="fields[first_name]"
              placeholder="Your first name"
              type="text"
            />
          </div>
          <div className="formkit-field">
            <input
              className="formkit-input"
              name="email_address"
              style={{
                color: "rgb(0, 0, 0)",
                borderColor: "rgb(227, 227, 227)",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
                borderBottomLeftRadius: "4px",
                fontWeight: 400,
              }}
              placeholder="Your email address"
              required
              type="email"
            />
          </div>
          <button
            data-element="submit"
            className="formkit-submit formkit-submit"
            style={{
              color: "rgb(255, 255, 255)",
              backgroundColor: "rgb(22, 119, 190)",
              borderTopLeftRadius: "24px",
              borderTopRightRadius: "24px",
              borderBottomRightRadius: "24px",
              borderBottomLeftRadius: "24px",
              fontWeight: 700,
            }}
          >
            <div className="formkit-spinner">
              <div />
              <div />
              <div />
            </div>
            <span>Subscribe</span>
          </button>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '.formkit-form[data-uid="b3af526942"] *{box-sizing:border-box;}.formkit-form[data-uid="b3af526942"]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.formkit-form[data-uid="b3af526942"] legend{border:none;font-size:inherit;margin-bottom:10px;padding:0;position:relative;display:table;}.formkit-form[data-uid="b3af526942"] fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0;}.formkit-form[data-uid="b3af526942"] body:not(:-moz-handler-blocked) fieldset{display:table-cell;}.formkit-form[data-uid="b3af526942"] h1,.formkit-form[data-uid="b3af526942"] h2,.formkit-form[data-uid="b3af526942"] h3,.formkit-form[data-uid="b3af526942"] h4,.formkit-form[data-uid="b3af526942"] h5,.formkit-form[data-uid="b3af526942"] h6{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="b3af526942"] p{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="b3af526942"] hr:not([template-default]),.formkit-form[data-uid="b3af526942"] .blockquote:not([template-default]),.formkit-form[data-uid="b3af526942"] .ordered-list:not([template-default]),.formkit-form[data-uid="b3af526942"] .unordered-list:not([template-default]){text-align:left;color:inherit;font-style:initial;}.formkit-form[data-uid="b3af526942"][data-format="modal"]{display:none;}.formkit-form[data-uid="b3af526942"][data-format="slide in"]{display:none;}.formkit-form[data-uid="b3af526942"] .formkit-input,.formkit-form[data-uid="b3af526942"] .formkit-select,.formkit-form[data-uid="b3af526942"] .formkit-checkboxes{width:100%;}.formkit-form[data-uid="b3af526942"] .formkit-button,.formkit-form[data-uid="b3af526942"] .formkit-submit{border:0;border-radius:5px;color:#ffffff;cursor:pointer;display:inline-block;text-align:center;font-size:15px;font-weight:500;cursor:pointer;margin-bottom:15px;overflow:hidden;padding:0;position:relative;vertical-align:middle;}.formkit-form[data-uid="b3af526942"] .formkit-button:hover,.formkit-form[data-uid="b3af526942"] .formkit-submit:hover,.formkit-form[data-uid="b3af526942"] .formkit-button:focus,.formkit-form[data-uid="b3af526942"] .formkit-submit:focus{outline:none;}.formkit-form[data-uid="b3af526942"] .formkit-button:hover > span,.formkit-form[data-uid="b3af526942"] .formkit-submit:hover > span,.formkit-form[data-uid="b3af526942"] .formkit-button:focus > span,.formkit-form[data-uid="b3af526942"] .formkit-submit:focus > span{background-color:rgba(0,0,0,0.1);}.formkit-form[data-uid="b3af526942"] .formkit-button > span,.formkit-form[data-uid="b3af526942"] .formkit-submit > span{display:block;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;padding:12px 24px;}.formkit-form[data-uid="b3af526942"] .formkit-input{background:#ffffff;font-size:15px;padding:12px;border:1px solid #e3e3e3;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;line-height:1.4;margin:0;-webkit-transition:border-color ease-out 300ms;transition:border-color ease-out 300ms;}.formkit-form[data-uid="b3af526942"] .formkit-input:focus{outline:none;border-color:#1677be;-webkit-transition:border-color ease 300ms;transition:border-color ease 300ms;}.formkit-form[data-uid="b3af526942"] .formkit-input::-webkit-input-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="b3af526942"] .formkit-input::-moz-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="b3af526942"] .formkit-input:-ms-input-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="b3af526942"] .formkit-input::placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="b3af526942"] [data-group="dropdown"]{position:relative;display:inline-block;width:100%;}.formkit-form[data-uid="b3af526942"] [data-group="dropdown"]::before{content:"";top:calc(50% - 2.5px);right:10px;position:absolute;pointer-events:none;border-color:#4f4f4f transparent transparent transparent;border-style:solid;border-width:6px 6px 0 6px;height:0;width:0;z-index:999;}.formkit-form[data-uid="b3af526942"] [data-group="dropdown"] select{height:auto;width:100%;cursor:pointer;color:#333333;line-height:1.4;margin-bottom:0;padding:0 6px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:15px;padding:12px;padding-right:25px;border:1px solid #e3e3e3;background:#ffffff;}.formkit-form[data-uid="b3af526942"] [data-group="dropdown"] select:focus{outline:none;}.formkit-form[data-uid="b3af526942"] [data-group="checkboxes"]{text-align:left;margin:0;}.formkit-form[data-uid="b3af526942"] [data-group="checkboxes"] [data-group="checkbox"]{margin-bottom:10px;}.formkit-form[data-uid="b3af526942"] [data-group="checkboxes"] [data-group="checkbox"] *{cursor:pointer;}.formkit-form[data-uid="b3af526942"] [data-group="checkboxes"] [data-group="checkbox"]:last-of-type{margin-bottom:0;}.formkit-form[data-uid="b3af526942"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]{display:none;}.formkit-form[data-uid="b3af526942"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"] + label::after{content:none;}.formkit-form[data-uid="b3af526942"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::after{border-color:#ffffff;content:"";}.formkit-form[data-uid="b3af526942"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::before{background:#10bf7a;border-color:#10bf7a;}.formkit-form[data-uid="b3af526942"] [data-group="checkboxes"] [data-group="checkbox"] label{position:relative;display:inline-block;padding-left:28px;}.formkit-form[data-uid="b3af526942"] [data-group="checkboxes"] [data-group="checkbox"] label::before,.formkit-form[data-uid="b3af526942"] [data-group="checkboxes"] [data-group="checkbox"] label::after{position:absolute;content:"";display:inline-block;}.formkit-form[data-uid="b3af526942"] [data-group="checkboxes"] [data-group="checkbox"] label::before{height:16px;width:16px;border:1px solid #e3e3e3;background:#ffffff;left:0px;top:3px;}.formkit-form[data-uid="b3af526942"] [data-group="checkboxes"] [data-group="checkbox"] label::after{height:4px;width:8px;border-left:2px solid #4d4d4d;border-bottom:2px solid #4d4d4d;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);left:4px;top:8px;}.formkit-form[data-uid="b3af526942"] .formkit-alert{background:#f9fafb;border:1px solid #e3e3e3;border-radius:5px;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;list-style:none;margin:25px auto;padding:12px;text-align:center;width:100%;}.formkit-form[data-uid="b3af526942"] .formkit-alert:empty{display:none;}.formkit-form[data-uid="b3af526942"] .formkit-alert-success{background:#d3fbeb;border-color:#10bf7a;color:#0c905c;}.formkit-form[data-uid="b3af526942"] .formkit-alert-error{background:#fde8e2;border-color:#f2643b;color:#ea4110;}.formkit-form[data-uid="b3af526942"] .formkit-spinner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:0px;width:0px;margin:0 auto;position:absolute;top:0;left:0;right:0;width:0px;overflow:hidden;text-align:center;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;}.formkit-form[data-uid="b3af526942"] .formkit-spinner > div{margin:auto;width:12px;height:12px;background-color:#fff;opacity:0.3;border-radius:100%;display:inline-block;-webkit-animation:formkit-bouncedelay-formkit-form-data-uid-b3af526942- 1.4s infinite ease-in-out both;animation:formkit-bouncedelay-formkit-form-data-uid-b3af526942- 1.4s infinite ease-in-out both;}.formkit-form[data-uid="b3af526942"] .formkit-spinner > div:nth-child(1){-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}.formkit-form[data-uid="b3af526942"] .formkit-spinner > div:nth-child(2){-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}.formkit-form[data-uid="b3af526942"] .formkit-submit[data-active] .formkit-spinner{opacity:1;height:100%;width:50px;}.formkit-form[data-uid="b3af526942"] .formkit-submit[data-active] .formkit-spinner ~ span{opacity:0;}.formkit-form[data-uid="b3af526942"] .formkit-powered-by[data-active="false"]{opacity:0.35;}@-webkit-keyframes formkit-bouncedelay-formkit-form-data-uid-b3af526942-{0%,80%,100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes formkit-bouncedelay-formkit-form-data-uid-b3af526942-{0%,80%,100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}} .formkit-form[data-uid="b3af526942"]{max-width:700px;}.formkit-form[data-uid="b3af526942"] [data-style="clean"]{width:100%;}.formkit-form[data-uid="b3af526942"] .formkit-fields{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 auto;}.formkit-form[data-uid="b3af526942"] .formkit-field,.formkit-form[data-uid="b3af526942"] .formkit-submit{margin:0 0 15px 0;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;}.formkit-form[data-uid="b3af526942"] .formkit-powered-by{color:#7d7d7d;display:block;font-size:12px;margin:0;text-align:center;}.formkit-form[data-uid="b3af526942"][min-width~="700"] [data-style="clean"],.formkit-form[data-uid="b3af526942"][min-width~="800"] [data-style="clean"]{padding:10px;}.formkit-form[data-uid="b3af526942"][min-width~="700"] .formkit-fields[data-stacked="false"],.formkit-form[data-uid="b3af526942"][min-width~="800"] .formkit-fields[data-stacked="false"]{margin-left:-5px;margin-right:-5px;}.formkit-form[data-uid="b3af526942"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-field,.formkit-form[data-uid="b3af526942"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-field,.formkit-form[data-uid="b3af526942"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-submit,.formkit-form[data-uid="b3af526942"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-submit{margin:0 5px 15px 5px;}.formkit-form[data-uid="b3af526942"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-field,.formkit-form[data-uid="b3af526942"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-field{-webkit-flex:100 1 auto;-ms-flex:100 1 auto;flex:100 1 auto;}.formkit-form[data-uid="b3af526942"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-submit,.formkit-form[data-uid="b3af526942"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-submit{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;} ',
        }}
      />
    </form>
  )
}
