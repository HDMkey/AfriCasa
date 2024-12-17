"use client";

import { useState, useEffect } from "react";

interface Message {
  id: string;
  sender: string;
  preview: string;
  timestamp: Date;
}

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données
    const mockMessages: Message[] = [
      {
        id: "1",
        sender: "John Doe",
        preview: "Bonjour, je suis intéressé par...",
        timestamp: new Date()
      }
    ];

    setMessages(mockMessages);
    setLoading(false);
  }, []);

  return { messages, loading };
}