import { NextResponse } from 'next/server';

const APP_NAME = process.env.APP_NAME || 'My App';

/**
 * GET /api/config
 * Returns app metadata consumed by the Golem dashboard.
 * The dashboard uses this to customize the sidebar chat (name, icon, starters).
 */
export async function GET() {
  return NextResponse.json({
    appName: APP_NAME,
    assistantName: 'Golem',
    assistantRole: `AI Assistant for ${APP_NAME}`,
    assistantIcon: '/logo.svg',
    emptyStateHeading: 'How can I help?',
    emptyStateSubtext: `Ask me anything about ${APP_NAME}`,
    conversationStarters: [
      'What can you do?',
      'Help me get started',
      'Show me what we have so far',
    ],
  });
}
