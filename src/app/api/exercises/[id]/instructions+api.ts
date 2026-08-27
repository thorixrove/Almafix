import { db, exercises } from "@/db";
import { auth } from "@/lib/auth";
import { generateText, Output } from "ai";
import { eq } from "drizzle-orm";
import { z } from "zod";
