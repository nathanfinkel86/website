# How to Update Events

## Easy Updates Without Cursor

Your events are stored in a simple JSON file that you can edit with any text editor.

### Location
`music-website/assets/events.json`

### Quick Edit Options

**Option 1: GitHub (Recommended for Quick Updates)**
1. Go to your GitHub repository
2. Navigate to `music-website/assets/events.json`
3. Click the pencil icon (Edit)
4. Make your changes
5. Commit directly to main

**Option 2: Any Text Editor**
1. Open `events.json` in TextEdit (Mac), Notepad (Windows), or VS Code
2. Make your changes following the format below
3. Save the file
4. Upload to your server/GitHub

## Event Format

Each event needs these fields:

```json
{
  "id": "unique-event-id",
  "title": "Event Name",
  "date": "2026-03-15",
  "venue": "Venue Name",
  "location": "City, Country",
  "description": "Brief description of the event",
  "tags": ["ambient", "glia"],
  "ticketUrl": "https://dandelion.events/nathanfinkelmusic/event-name",
  "status": "upcoming",
  "imageUrl": ""
}
```

### Field Explanations

- **id**: Unique identifier (use lowercase, dashes, no spaces)
- **title**: Event name
- **date**: Format: YYYY-MM-DD
- **venue**: Venue name
- **location**: City, Country
- **description**: Brief description
- **tags**: Array of tags for filtering
  - Available: `"ambient"`, `"facilitation"`, `"glia"`, `"morocco"`
- **ticketUrl**: Full Dandelion Events URL (or leave empty `""`)
- **status**: Either `"upcoming"` or `"past"`
- **imageUrl**: Leave empty for now `""`

## Adding a New Event

Copy this template and fill in your details:

```json
{
  "id": "my-new-show",
  "title": "Ambient Set at Cool Venue",
  "date": "2026-06-20",
  "venue": "The Underground",
  "location": "Bristol, UK",
  "description": "Immersive ambient performance with modular synths and guitar.",
  "tags": ["ambient"],
  "ticketUrl": "https://dandelion.events/nathanfinkelmusic/bristol-show",
  "status": "upcoming",
  "imageUrl": ""
}
```

**Important:** Add a comma after the previous event's closing `}`, then paste your new event.

## Moving Events to Past

When an event is over, just change:
```json
"status": "upcoming"
```
to:
```json
"status": "past"
```

## Tips

- Keep descriptions concise (1-2 sentences)
- Use consistent date format (YYYY-MM-DD)
- Always include at least one tag for filtering
- Test locally before pushing to live site
- Events automatically sort by date

## Troubleshooting

**Events not showing?**
- Check JSON syntax (commas, brackets, quotes)
- Validate at https://jsonlint.com
- Check browser console for errors (F12)

**Filter not working?**
- Ensure tags match exactly: `"ambient"`, `"facilitation"`, `"glia"`, `"morocco"`
- Tags must be in lowercase

## Example events.json

```json
[
  {
    "id": "show-march-2026",
    "title": "Spring Ambient Performance",
    "date": "2026-03-15",
    "venue": "The Dome",
    "location": "London, UK",
    "description": "Ambient electronic set with Glia live improvisation.",
    "tags": ["ambient", "glia"],
    "ticketUrl": "https://dandelion.events/nathanfinkelmusic/spring",
    "status": "upcoming",
    "imageUrl": ""
  },
  {
    "id": "workshop-april-2026",
    "title": "Inclusive Music Workshop",
    "date": "2026-04-10",
    "venue": "Community Space",
    "location": "Manchester, UK",
    "description": "Workshop for all abilities. No experience required.",
    "tags": ["facilitation"],
    "ticketUrl": "",
    "status": "upcoming",
    "imageUrl": ""
  }
]
```
