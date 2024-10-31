---
title: a chantastic guide to karabiner-elements
date: 2024-05-05
---

## Your keyboard is under-utilized

## Modding philosophy

My rules for remapping.

1. **Never break rollover.** Only create layers from keys typically followed by a space. e.g., <kbd>.</kbd>, <kbd>,</kbd>, <kbd>'</kbd>, <kbd>tab</kbd>, <kbd>;</kbd>, <kbd>-</kbd>.
2. Prize symmetry.

## Why software-level mapping?

## Embrace clojurescript

## Ideas

- double-tapping a modifier locks it (cmd, shift, ctrl, option (meh?))
- hitting both right and left version of key perform some type of common action

## Unstructured notes

- for modifier keys: remap keys, not positions (this is important for being able to maintain availability to hardware opinions
- for home cluster keys: map positions, not characters. makes it easier to change layouts and optimizes for hand position
- two finger commands should always be done with two hands or with one hand, never leaving a neutral position
- daily commands with more than two keys get mapped to homerow
- commands that remove either hand from home row get mapped
- one directional cluster for each hand

home cluster vs home row

- capture
- display
- window
- file
- open
- location (2:2426, 3:3000, 4:4321, 6:6006, 7:7689)
- character (no character layer. that’s what a keyboard is for)
- direction (left mod, right action)
- move (left mod,
- select (left mod,
- one control on each side
- god mode (switch profile?) qwerty left hand no command (<kbd>cmd</kbd> + <kbd>cmd</kbd> mode?)
  - select all
  - save
  - cut, copy, paste
  - undo / redo (shift)
  - move forward/back
  - move to front/back
- mapping for davinci, to whatever is default

## My file, up to this point

Break this up into fundamental pieces.

```edn
; links
;; command shorthand: https://github.com/yqrashawn/GokuRakuJoudo/blob/master/tutorial.md#command-a-to-control-1
{:simlayers {
             ; unlikely to be followed by alphanumeric characters
             :period-mode {:key :period}
             ; :comma-mode {:key :comma}
             ; :quote-mode {:key :quote}
             ; :hyphen-mode {:key :hyphen}
             ;; :semicolon-mode {:key :semicolon}

             ; likely to be followed by alphanumeric characters 
             ;; :backtick-mode {:key :grave_accent_and_tilde}
             ;; :slash-mode {:key :slash} ;; often used for in-page search
             }

 :templates {:launch "osascript -e 'tell application \"%s\" to activate'",
             ;; :displayplacer "displayplacer 'id:44402D57-1A3C-4E17-B021-A62AE68A07A0 res:\"%s\" hz:60 color_depth:8 enabled:true scaling:on origin:(0,0) degree:0'",
             :open "open %s",
             :open-in-arc "osascript -e ' tell application \"Arc\"\nactivate\ntell front window\nmake new tab with properties {URL:\"%s\"}\nend tell\nend tell'",}

 :main [
        ; keyboard symetry
        ; TODO: currently setting caps_lock to control in the GUI. could be nice to have it ALL in here.
        ; {:des "HOLD: - => ^" :rules [[:##hyphen :right_control nil {:alone :hyphen}]]}
        ; {:des "HOLD: spacebar => ⌘)" :rules [[:##spacebar :right_command nil {:alone :spacebar}]]}
        ; {:des "HOLD: tab => ✦" :rules [[:##tab :!QWEright_shift nil {:alone :tab}]]}

        {:des "spacebar (held) => ⌥R)" :rules [[:##spacebar :right_option nil {:alone :spacebar}]]}

        {:des "⌘L (tap) => delete" :rules [[:##left_command :left_command nil {:alone :delete_or_backspace}]]}
        {:des "⌘R (tap) => return" :rules [[:##right_command :right_command nil {:alone :return_or_enter}]]}

        ; {:des "⇧L (tap) => escape" :rules [[:##left_shift :left_shift nil {:alone :escape}]]}
        ; {:des "⇧R (tap) => return" :rules [[:##right_shift :right_shift nil {:alone :return_or_enter}]]}

        {:des "^L (tap) => escape" :rules [[:##left_control :left_control nil {:alone :escape}]]} ; remapped to caps_lock in UI for positional parity with :hyphen. and to potentiall add symmetry to /\ (on smaller keyboards, when chording)

        ; {:des "= (held) ^L" :rules [[:##equal_sign :left_control nil {:alone :equal_sign}]]} ; remapped to caps_lock in UI for positional parity with :hyphen. and to potentiall add symmetry to /\ (on smaller keyboards, when chording)
        {:des "- (held) ^R" :rules [[:##hyphen :right_control nil {:alone :hyphen}]]}


        ; {:des "TAP/HOLD: ⇪ => esc/^" :rules [[:##caps_lock :left_control nil {:alone :escape}]]}

        ; simulate thumb clusters with ⌘ key
        ; these really craete more problems than they solve. i'm regularly deleting things (unwittingly) when command-tabbing.
        ; additionally, the thumb positions just aren't as nice as with legit thumb clusters.
        ; i'd leave this as a physical-keyboard-only improvement.
        ;; {:des "R⌘ > RETURN (when tapped)" :rules [[:##right_command :right_command nil {:alone :##return_or_enter}]]} 
        ;; {:des "L⌘ > DELETE (when tapped)" :rules [[:##left_command :left_command nil {:alone :##delete_or_backspace}]]}

        ; app launcher/switcher layer
        {:des "period mode"
         :rules [:period-mode
                 ; right-hand characters (mnemonic)
                 [:b [:launch "Arc"]]
                 [:c [:launch "Calendar"]]
                 ; [:d [:launch ""]]
                 [:f [:launch "Finder"]]
                 ; [:g [:launch ""]]
                 ; [:h [:launch ""]]
                 [:l [:launch "Superhuman"]]
                 [:m [:launch "Messages"]]
                 [:n [:launch "Notes"]]
                 [:r [:launch "OBS"]]
                 [:s [:launch "Slack"]]
                 [:t [:launch "Alacritty"]]
                 [:v [:launch "Visual Studio Code"]]
                 [:w [:launch "Warp"]]
                 [:z [:launch "zoom.us"]]
                 [:open_bracket [:!CStab]]
                 [:close_bracket [:!Ctab]]
                 ]}

                 ; [:hyphen [:launch ""]]
                 ; [:slash [:launch ""]]
                 ; [:backslash [:launch ""]]
                 ; [:equal_sign [:launch ""]]
                 ; [:6 [:launch ""]]
                 ; [:7 [:launch ""]]
                 ; [:8 [:launch ""]]
                 ; [:9 [:launch ""]]
                 ; [:0 [:launch ""]]
        
        ;{:des "1 > L⇧ (when held)" :rules [[:##1 :left_shift nil {:alone :1}]]}
        ;{:des "2 > L⌥ (when held)" :rules [[:##2 :left_option nil {:alone :2}]]}
        ;{:des "3 > L^ (when held)" :rules [[:##3 :left_control nil {:alone :3}]]}
        ;{:des "4 > L⌘ (when held)" :rules [[:##4 :left_command nil {:alone :4}]]}
        
        ;{:des "7 > R⌘ (when held)" :rules [[:##7 :right_command nil {:alone :7}]]}
        ;{:des "8 > R^ (when held)" :rules [[:##8 :right_control nil {:alone :8}]]}
        ;{:des "9 > R⌥ (when held)" :rules [[:##9 :right_option nil {:alone :9}]]}
        ;{:des "0 > R⇧ (when held)" :rules [[:##0 :right_shift nil {:alone :0}]]}

        ;; {:des "semicolon mode"
        ;;  :rules [:semicolon-mode
        ;;          ;; directional
        ;;          [:c [:!TOup_arrow]]
        ;;          [:n [:!TOright_arrow]]
        ;;          [:t [:!TOdown_arrow]]
        ;;          [:h [:!TOleft_arrow]]
        ;;          ;; nmemonic
        ;;          [:d [:!TOd]]
        ;;          [:return_or_enter [:!TOreturn_or_enter]]
        ;;          ]}
        
        ; 10-key layer
        ; {:des "quote mode" ; 10-key mode
        ;  :rules [:quote-mode
        ;          [:r :keypad_9]
        ;          [:c :keypad_8]
        ;          [:g :keypad_7]
        ;          [:n :keypad_6]
        ;          [:t :keypad_5]
        ;          [:h :keypad_4]
        ;          [:v :keypad_3]
        ;          [:w :keypad_2]
        ;          [:m :keypad_1]
        ;          [:0 :keypad_slash] 
        ;          [:l :keypad_asterisk]
        ;          [:s :keypad_hyphen]
        ;          [:z :keypad_plus]
        ;          [:right_command :keypad_0]
        ;          [:right_option :keypad_period]
        ;          [:return_or_enter :keypad_equal_sign]
        ;          ; keypad_enter, keypad_comma
        ;          ]}

        ; directory layer
        ; {:des "comma mode"
        ;  :rules [:comma-mode
        ;          [:c [:open "~/.config -a 'Visual Studio Code'"]]
        ;          [:d [:open "~/Desktop -a 'Finder'"]]
        ;          ; fgh
        ;          [:l [:open "~/Downloads -a 'Finder'"]]
        ;          ; mnr
        ;          [:s [:open "~/sites/chan.dev -a 'Visual Studio Code'"]]
        ;          ; tuvwz
        ;          [:7 [:open "~/Desktop -a 'Finder'"]]
        ;          [:8 [:open "~/Downloads -a 'Finder'"]]
        ;          [:9 [:open "~/Documents -a 'Finder'"]]
        ;          [:0 [:open "~ -a 'Finder'"]]
        ;          ; -/=\[]
        ;          ]}

        ; location layer
        ; {:des "hyphen mode"
        ;  :rules [:hyphen-mode
        ;          [:1 [:open-in-arc "http://localhost:1234"]]
        ;          [:2 [:open-in-arc "http://localhost:2426"]]
        ;          [:3 [:open-in-arc "http://localhost:3000"]]
        ;          [:4 [:open-in-arc "http://localhost:4321"]]
        ;          [:5 [:open-in-arc "http://localhost:5173"]]
        ;          [:x [:open-in-arc "https://x.com/notifications/mentions"]] ; add an open in profile option
        ;          [:y [:open-in-arc "https://youtube.com"]]
        ;          ; same hand. gross                 
        ;          [:6 [:open-in-arc "http://localhost:6006"]]
        ;          [:7 [:open-in-arc "http://localhost:7890"]]
        ;          [:8 [:open-in-arc "http://localhost:8080"]]
        ;          [:9 [:open-in-arc "http://localhost:9000"]]
        ;          [:g [:open-in-arc "https://github.com"]]
        ;          [:h [:open-in-arc "https://chan.dev"]]
        ;          [:s [:open-in-arc "https://studio.youtube.com"]]
        ;          ]}
        

        ;; {:des "display mode"
        ;;  :rules [:display-mode
        ;;          [:1 [:displayplacer "2560x1440"]]
        ;;          [:2 [:displayplacer "1920x1080"]]]}


        ; fully expanded version
        ;; {:des "period mode"
        ;;  :rules [[:c [:launch "Calendar"] :period-mode]
        ;;          [:b [:launch "Google Chrome"] :period-mode]
        ;;          [:m [:launch "Messages"] :period-mode]]}
        
]}
```
