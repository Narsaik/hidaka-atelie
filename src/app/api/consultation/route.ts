import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

interface ConsultationData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ConsultationData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.eventType) {
      return NextResponse.json(
        { success: false, error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, error: "Email inválido" },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    // Insert consultation request into database
    const { data: insertedData, error } = await supabase
      .from("consultation_requests")
      .insert([
        {
          name: data.name.trim(),
          email: data.email.toLowerCase().trim(),
          phone: data.phone.trim(),
          event_type: data.eventType,
          event_date: data.eventDate || null,
          message: data.message?.trim() || null,
          status: "new",
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { success: false, error: "Erro ao salvar solicitação" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Solicitação recebida com sucesso!",
        id: insertedData?.[0]?.id
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Consultation API error:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
