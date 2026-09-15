# Delivery Line — agent prototype

A phone number for your home that handles delivery drivers. This is the agent part only:
no telephony, no UI polish. You record your directions once, then you talk to the agent
out loud the way a driver would, and you hear it answer.

## Run

```bash
cd delivery-line
python3 -m http.server 8000
```

Open **http://localhost:8000** in **Chrome** (mic + speech recognition need Chrome and a
localhost/https origin — opening the file directly will not work).

1. Paste an Anthropic API key (kept in localStorage; prototype shortcut only).
2. **Teach your agent** — hit Record and say how you guide drivers to your house, the way
   you already say it on the phone. Or type it. Claude turns it into short facts, translates
   each one to Arabic/English/Urdu, and writes the greeting. You see exactly what it understood.
3. **Driver calls** — press call. It picks up and front-loads the key instructions. Then tap
   to talk (or type) as the driver, and listen.

## The agent loop

Every driver utterance goes to Claude with the household knowledge as the only source of truth.
It returns one decision:

| action | when |
| --- | --- |
| `answer` | the fact is in your recording |
| `repeat_simpler` | driver did not understand — same fact, simpler words |
| `escalate` | not in your recording, security refuses entry, payment/order problem, driver asks for the customer, or speech unclear twice |
| `end_call` | driver says it is delivered |

The decision and its reason print under each line, so you can see *why* it did what it did.
`escalate` is the one that matters: that is where your real phone would ring, and the prototype
logs it instead of ringing.

The agent is told never to invent a gate, floor or landmark. If it is not in your recording,
it escalates rather than guesses.

## Known limits (deliberate)

- Browser speech recognition is one language at a time — you pick the driver's language.
  Real product does this over the phone line with a multilingual ASR.
- Arabic/Urdu text-to-speech depends on the voices your OS has. macOS and Windows have Arabic;
  bare Linux often does not, so you may hear an English voice reading Arabic text.
- No real number, no transfer, no photo sending yet.
